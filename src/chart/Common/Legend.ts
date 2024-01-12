import Canvas from './Canvas';
import Vector from './Vector';
import type { ChartStrategy } from './types';

export type LegendDataInfo = {
  label: string;
  color: string;
  labelWidth: number;
  labelHeight: number;
};

type PieChartLegendParams = {
  canvas: HTMLCanvasElement;
};

class Legend implements ChartStrategy {
  public canvas: Canvas;

  public dataInfo: Array<LegendDataInfo>;

  public width: number;

  public height: number;

  public position: Vector;

  public markSize: number;

  public markRound: number;

  public columnGap: number;

  public rowGap: number;

  public markTextGap: number;

  public direction: 'v' | 'h';

  constructor() {
    this.canvas = new Canvas();

    this.dataInfo = [];

    this.width = 0;

    this.height = 0;

    this.position = new Vector(0, 0);

    this.markSize = 10;

    this.markRound = 2;

    this.columnGap = 0;

    this.rowGap = 0;

    this.markTextGap = 0;

    this.direction = 'v';
  }

  public isInsideLegend = (pointerX: number, pointerY: number) => {
    const { rowGap, markSize, markTextGap, columnGap } = this;
    let isInside = false;
    let index = -1;

    const len = this.dataInfo.length;
    let next = 0;
    for (let i = 0; i < len; i++) {
      const { labelWidth, labelHeight } = this.dataInfo[i];
      const { x, y } = this.position;

      if (this.direction === 'v') {
        const legendAreaX = x;
        const legendAreaY = y + labelHeight * i + rowGap * i;
        const startX = legendAreaX;
        const endX = legendAreaX + labelWidth + markSize + markTextGap;
        const startY = legendAreaY + labelHeight;
        const endY = legendAreaY;
        if (
          startX <= pointerX &&
          pointerX <= endX &&
          pointerY <= startY &&
          endY <= pointerY
        ) {
          index = i;
          isInside = true;
          break;
        }
      } else {
        const legendAreaX = x + next;
        const legendAreaY = y;
        const startX = legendAreaX;
        const endX = startX + labelWidth + markSize + markTextGap;
        const startY = legendAreaY + labelHeight;
        const endY = y;
        if (
          startX <= pointerX &&
          pointerX <= endX &&
          pointerY <= startY &&
          endY <= pointerY
        ) {
          index = i;
          isInside = true;
          break;
        }
        next = next + labelWidth + markSize + columnGap + markTextGap;
      }
    }

    return {
      isInside,
      index,
    };
  };

  private render = () => {
    const { canvas, ctx } = this.canvas;
    if (!canvas || !ctx) return;
    const {
      dataInfo,
      markSize,
      markRound,
      position,
      columnGap,
      rowGap,
      markTextGap,
      direction,
    } = this;
    ctx.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight);

    const len = dataInfo.length;
    let next = 0;
    for (let i = 0; i < len; i++) {
      const { label, color, labelWidth, labelHeight } = dataInfo[i];

      let textX = 0;
      let textY = 0;
      let markX = 0;
      let markY = 0;

      if (direction === 'v') {
        const { x } = position;
        const y = position.y + labelHeight * i + rowGap * i;

        markX = x;
        markY = y + labelHeight * 0.13;
        textX = x + markSize + markTextGap;
        textY = y + labelHeight;
      } else {
        const { x, y } = position;

        markX = x + next;
        markY = y + labelHeight * 0.13;
        textX = markX + markSize + markTextGap;
        textY = y + labelHeight;

        next = next + labelWidth + markSize + columnGap + markTextGap;
      }

      ctx.save();
      ctx.beginPath();
      ctx.fillText(label, textX, textY);
      ctx.fillStyle = color;
      ctx.roundRect(markX, markY, markSize, markSize, [
        markRound,
        markRound,
        markRound,
        markRound,
      ]);
      ctx.fill();
      ctx.closePath();
      ctx.restore();
    }
  };

  public update = ({ dataInfo }: { dataInfo: Array<LegendDataInfo> }) => {
    this.dataInfo = dataInfo;
  };

  public renderer = () => {
    this.render();
  };

  public reload = () => {
    this.canvas.reload();
  };

  public defaultStyleSetter = ({
    direction,
    position: { x, y },
    columGap,
    rowGap,
    markTextGap,
  }: {
    direction: 'h' | 'v';
    position: { x: number; y: number };
    columGap: number;
    rowGap: number;
    markTextGap: number;
  }) => {
    this.direction = direction;
    this.position.x = x;
    this.position.y = y;
    this.columnGap = columGap;
    this.rowGap = rowGap;
    this.markTextGap = markTextGap;
  };

  public load = ({ canvas }: PieChartLegendParams) => {
    this.canvas.load({ canvas });

    this.canvas.canvas!.style.position = 'absolute';
  };
}

export default Legend;
