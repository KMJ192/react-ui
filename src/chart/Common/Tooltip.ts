import Canvas from './Canvas';
import type { Coordinate } from './types';
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
};

type TooltipReactiveStyleParams = {
  markSize: number;
  rowGap: number;
  columnGap: number;
  markLabelGap: number;
  titleContentsGap: number;
  font: string;
  padding: {
    top: number;
    bottom: number;
    left: number;
    right: number;
  };
};

type TooltipParams = {
  canvas: HTMLCanvasElement;
};

class Tooltip {
  public canvas: Canvas;

  public isVisible: boolean;

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

  public strokeColor: string;

  public backgroundColor: string;

  constructor() {
    this.canvas = new Canvas();

    this.isVisible = false;

    this.font = '1rem Arial';

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
  }

  public clear = () => {
    const { ctx } = this.canvas;
    if (!ctx) return;
    const { width, height } = this.canvas;
    ctx.clearRect(0, 0, width, height);
  };

  public render = ({
    coordinate: { x, y },
    title,
    names,
    value,
    markColor,
  }: TooltipRenderDataInfo) => {
    const { ctx } = this.canvas;
    if (!ctx) return;

    this.clear();

    const {
      markSize,
      padding,
      columnGap,
      rowGap,
      markLabelGap,
      titleContentsGap,
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
    ctx.fillStyle = this.backgroundColor;
    ctx.roundRect(x, y, width, height, [4, 4, 4, 4]);
    ctx.fill();
    ctx.closePath();
    ctx.restore();

    const titleCoordinate = {
      x: x + padding.left,
      y: y + titleHeight + padding.top,
    };

    ctx.save();
    ctx.font = `bold ${this.font}`;
    ctx.fillText(title, titleCoordinate.x, titleCoordinate.y);
    ctx.stroke();
    ctx.restore();

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

      ctx.fillText(name.label, nameCoordinate.x, nameCoordinate.y);
      ctx.fillText(value.label, valueCoordinate.x, valueCoordinate.y);
      ctx.stroke();

      ctx.fillStyle = mark.color;
      ctx.roundRect(
        mark.coordinate.x,
        mark.coordinate.y,
        markSize,
        markSize,
        [2, 2, 2, 2],
      );
      ctx.fill();

      ctx.closePath();

      ctx.restore();
    }
  };

  public reactiveStyleSetter = ({
    markSize,
    rowGap,
    columnGap,
    font,
    padding,
    markLabelGap,
    titleContentsGap,
  }: TooltipReactiveStyleParams) => {
    this.markSize = markSize;
    this.rowGap = rowGap;
    this.columnGap = columnGap;
    this.padding = padding;
    this.markLabelGap = markLabelGap;
    this.titleContentsGap = titleContentsGap;
    this.font = font;
    if (this.canvas.ctx) this.canvas.ctx.font = this.font;
  };

  public styleSetter = ({
    strokeColor,
    backgroundColor,
  }: TooltipStylePrams) => {
    this.strokeColor = strokeColor;
    this.backgroundColor = backgroundColor;
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
