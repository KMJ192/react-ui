import Canvas from '../Common/Canvas';
import type { ChartStrategy } from '../Common/types';
import type { PieChartWedgeDataInfo } from './types';

type PieChartWedgeParams = {
  canvas: HTMLCanvasElement;
  divideColor: string;
};

class Wedge implements ChartStrategy {
  public canvas: Canvas;

  public dataInfo: Array<PieChartWedgeDataInfo>;

  public hoverIdx: number;

  public x: number;

  public y: number;

  public radius: number;

  public width: number;

  public height: number;

  public isRender: boolean;

  private divideColor: string;

  private initRenderInterval: number;

  constructor() {
    this.canvas = new Canvas();

    this.dataInfo = [];

    this.hoverIdx = -1;

    this.x = 0;

    this.y = 0;

    this.radius = 0;

    this.width = 0;

    this.height = 0;

    this.isRender = false;

    this.divideColor = 'none';

    this.initRenderInterval = 0;
  }

  private render = () => {
    const { canvas, ctx } = this.canvas;
    if (!canvas || !ctx) return;
    const { dataInfo, hoverIdx, width, height, x, y, radius } = this;

    ctx.clearRect(0, 0, width, height);

    const len = dataInfo.length;

    const angle = (degree: number) => {
      return ((degree * this.initRenderInterval - 90) / 180) * Math.PI;
    };

    const draw = (
      x: number,
      y: number,
      radius: number,
      start: number,
      end: number,
      color: string,
      isHover: boolean,
    ) => {
      ctx.save();
      if (isHover) {
        ctx.shadowColor = 'rgba(0, 0, 0, 0.9)';
        ctx.shadowBlur = 8;
        ctx.shadowOffsetX = 3;
        ctx.shadowOffsetY = 3;
      }
      ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.arc(x, y, radius, angle(start), angle(end), false);
      ctx.closePath();
      ctx.fillStyle = color;
      ctx.fill();
      if (this.divideColor !== 'none') {
        ctx.strokeStyle = this.divideColor;
        ctx.stroke();
      }
      ctx.restore();
    };

    for (let i = 0; i < len; i++) {
      const { startDegree, endDegree, color, disabled } = dataInfo[i];
      const isHover = i === hoverIdx && !disabled;
      if (isHover) continue;

      draw(x, y, radius, startDegree, endDegree, color, isHover);
    }
    if (hoverIdx > -1) {
      const { startDegree, endDegree, color, disabled } = dataInfo[hoverIdx];
      if (disabled) return;
      draw(x, y, radius * 1.085, startDegree, endDegree, color, true);
    }
  };

  public update = ({
    dataInfo,
    x,
    y,
    radius,
    width,
    height,
  }: {
    dataInfo: Array<PieChartWedgeDataInfo>;
    x: number;
    y: number;
    radius: number;
    width: number;
    height: number;
  }) => {
    this.x = x;

    this.y = y;

    this.radius = radius;

    this.width = width;

    this.height = height;

    this.dataInfo = dataInfo;
  };

  public isInsideWedge = (x: number, y: number) => {
    const { width, height, radius } = this;

    let isInside = false;
    let index = -1;
    const xx = width / 2 - x;
    const yy = height / 2 - y;
    const arcLen = Math.sqrt(Math.abs(xx ** 2) + Math.abs(yy ** 2));
    if (radius >= arcLen) {
      isInside = true;
    }

    let degree = (Math.atan2(yy, xx) * 180) / Math.PI - 90;
    if (degree < 0) degree += 360;

    if (isInside) {
      const len = this.dataInfo.length;
      for (let i = 0; i < len; i++) {
        const { startDegree, endDegree } = this.dataInfo[i];
        if (startDegree <= degree && degree <= endDegree) {
          index = i;
          break;
        }
      }
    }

    return {
      isInside,
      index,
    };
  };

  public renderer = () => {
    if (this.isRender) return;

    if (this.initRenderInterval === 1) {
      this.isRender = true;
      this.render();
      this.isRender = false;
      return;
    }

    const animation = () => {
      if (this.initRenderInterval >= 1) {
        this.initRenderInterval = 1;
        this.isRender = false;
        return;
      }

      this.initRenderInterval += 0.02;
      if (this.initRenderInterval > 1) this.initRenderInterval = 1;
      this.render();
      window.requestAnimationFrame(animation);
    };
    this.isRender = true;
    window.requestAnimationFrame(animation);
  };

  public reload = () => {
    this.canvas.reload();
  };

  public load = ({ canvas, divideColor }: PieChartWedgeParams) => {
    this.canvas.load({ canvas });

    if (!this.canvas.canvas) return;

    this.canvas.canvas.style.position = 'absolute';

    this.divideColor = divideColor;
  };
}

export default Wedge;
