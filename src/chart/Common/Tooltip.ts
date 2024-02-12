import Canvas from './Canvas';
import type { ChartComponentStrategy, Coordinate } from './types';
import { getTextSize } from './utils';

export type TooltipRenderDataInfo = {
  title: string;
  names: Array<string>;
  value: Array<string>;
  markColor: Array<string>;
  coordinate: Coordinate;
};

type TooltipStylePrams = {
  strokeColor: string;
  backgroundColor: string;
  markSize: number;
  rowGap: number;
  columnGap: number;
  markLabelGap: number;
  titleContentsGap: number;
  font: string;
  fontColor: string;
  padding: {
    top: number;
    bottom: number;
    left: number;
    right: number;
  };
  borderRadius: number;
};

type TooltipParams = {
  canvas: HTMLCanvasElement;
};

class Tooltip implements ChartComponentStrategy {
  public name = 'tooltip';

  public canvas: Canvas;

  public columnGap: number;

  public rowGap: number;

  public markLabelGap: number;

  public titleContentsGap: number;

  public padding: {
    top: number;
    bottom: number;
    left: number;
    right: number;
  };

  public markSize: number;

  public font: string;

  public fontColor: string;

  public strokeColor: string;

  public backgroundColor: string;

  public borderRadius: number;

  private isRender: boolean;

  constructor() {
    this.canvas = new Canvas();

    this.font = '1rem Arial';

    this.fontColor = '#000';

    this.columnGap = 12;

    this.rowGap = 4;

    this.markLabelGap = 4;

    this.titleContentsGap = 8;

    this.padding = {
      top: 6,
      bottom: 6,
      left: 6,
      right: 6,
    };

    this.markSize = 0;

    this.strokeColor = '#000';

    this.backgroundColor = '#fff';

    this.borderRadius = 4;

    this.isRender = false;
  }

  public clear = () => {
    if (!this.isRender) return;
    const { ctx } = this.canvas;
    if (!ctx) return;
    const { width, height } = this.canvas;
    ctx.clearRect(0, 0, width, height);
  };

  public renderer = ({
    coordinate: { x, y },
    title,
    names,
    value,
    markColor,
  }: TooltipRenderDataInfo) => {
    const { ctx } = this.canvas;
    if (!ctx) return;

    this.clear();
    this.isRender = false;

    const {
      markSize,
      padding,
      columnGap,
      rowGap,
      markLabelGap,
      titleContentsGap,
      fontColor,
    } = this;

    const renderData = [];
    const { width: titleWidth, height: titleHeight } = getTextSize(ctx, title);

    let width = titleWidth;
    let height = padding.top + padding.bottom + titleHeight + titleContentsGap;

    const nextCoordinate = {
      x: x + padding.left,
      y: y + padding.top + titleHeight + titleContentsGap,
    };
    const len = names.length;
    for (let i = 0; i < len; i++) {
      const isLast = i === len - 1;
      const rGap = isLast ? 0 : rowGap;
      const name = names[i];
      const v = value[i];
      const { width: nameWidth, height: nameHeight } = getTextSize(ctx, name);
      const { width: valueWidth, height: valueHeight } = getTextSize(ctx, v);
      const curWidth =
        padding.left +
        padding.right +
        columnGap +
        markLabelGap +
        nameWidth +
        valueWidth +
        markSize;
      const curHeight = Math.max(nameHeight, valueHeight);

      const markCoordinate = {
        x: nextCoordinate.x,
        y: nextCoordinate.y,
      };

      renderData.push({
        mark: {
          color: markColor[i],
          coordinate: markCoordinate,
        },
        name: {
          label: name,
          width: nameWidth,
          height: nameHeight,
        },
        value: {
          label: v,
          width: valueWidth,
          height: valueHeight,
        },
      });

      nextCoordinate.y += curHeight + rGap;

      height += curHeight + rGap;
      width = Math.max(width, curWidth);
    }

    ctx.save();
    ctx.beginPath();
    ctx.fillStyle = this.backgroundColor;
    ctx.roundRect(x, y, width, height, this.borderRadius);
    ctx.fill();
    ctx.stroke();
    ctx.closePath();
    ctx.restore();

    if (title.length > 0) {
      const titleCoordinate = {
        x: x + padding.left,
        y: y + titleHeight + padding.top,
      };
      ctx.save();
      ctx.font = `bold ${this.font}`;
      ctx.fillText(title, titleCoordinate.x, titleCoordinate.y);
      ctx.restore();
    }

    for (let i = 0; i < len; i++) {
      const { mark, name, value } = renderData[i];

      const nameCoordinate = {
        x: mark.coordinate.x + markSize + markLabelGap,
        y: mark.coordinate.y + Math.max(name.height, value.height),
      };
      const valueCoordinate = {
        x: x + width - value.width - padding.right,
        y: nameCoordinate.y,
      };

      ctx.save();
      ctx.beginPath();
      ctx.fillStyle = fontColor;
      ctx.fillText(name.label, nameCoordinate.x, nameCoordinate.y);
      ctx.fillText(value.label, valueCoordinate.x, valueCoordinate.y);
      ctx.fillStyle = mark.color;
      ctx.roundRect(
        mark.coordinate.x,
        mark.coordinate.y,
        markSize,
        markSize,
        2,
      );
      ctx.fill();
      ctx.closePath();
      ctx.restore();
    }

    this.isRender = true;
  };

  public styleUpdate = ({
    strokeColor,
    backgroundColor,
    markSize,
    rowGap,
    columnGap,
    font,
    fontColor,
    padding,
    markLabelGap,
    titleContentsGap,
    borderRadius,
  }: TooltipStylePrams) => {
    this.strokeColor = strokeColor;
    this.backgroundColor = backgroundColor;
    this.markSize = markSize;
    this.rowGap = rowGap;
    this.columnGap = columnGap;
    this.padding = padding;
    this.markLabelGap = markLabelGap;
    this.titleContentsGap = titleContentsGap;
    this.font = font;
    this.fontColor = fontColor;
    this.borderRadius = borderRadius;
    if (this.canvas.ctx) {
      this.canvas.ctx.font = this.font;
    }
  };

  public reload = () => {
    this.canvas.reload();
  };

  public load = ({ canvas }: TooltipParams) => {
    this.canvas.load({ canvas });

    this.canvas.canvas!.style.position = 'absolute';
  };
}

export default Tooltip;
