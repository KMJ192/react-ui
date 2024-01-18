import Canvas from '../Common/Canvas';
import Vector from '../Common/Vector';
import type { ChartComponentStrategy } from '../Common/types';
import type { PieChartRenderData } from './types';

type PieChartWedgeParams = {
  canvas: HTMLCanvasElement;
};

class Wedge implements ChartComponentStrategy {
  public canvas: Canvas;

  public hoverIdx: number;

  private isRender: boolean;

  private renderData: ReadonlyArray<PieChartRenderData>;

  private position: Vector;

  private radius: number;

  private initRenderInterval: number;

  constructor() {
    this.canvas = new Canvas();

    this.renderData = [];

    this.hoverIdx = -1;

    this.position = new Vector(0, 0);

    this.radius = 0;

    this.isRender = false;

    this.initRenderInterval = 0;
  }

  get getIsRender() {
    return this.isRender;
  }

  private angle = (degree: number) => {
    return ((degree * this.initRenderInterval - 90) / 180) * Math.PI;
  };

  private draw = (index: number) => {
    const { canvas, ctx } = this.canvas;
    if (!canvas || !ctx) return;
    const {
      renderData,
      position: { x, y },
    } = this;
    const { startDegree, endDegree, color, disabled } = renderData[index];
    const isHover = this.hoverIdx === index && !disabled;
    const radius = isHover ? this.radius * 1.085 : this.radius;

    ctx.save();
    if (isHover) {
      ctx.shadowColor = 'rgba(0, 0, 0, 0.9)';
      ctx.shadowBlur = 8;
      ctx.shadowOffsetX = 3;
      ctx.shadowOffsetY = 3;
    }
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.arc(
      x,
      y,
      radius,
      this.angle(startDegree),
      this.angle(endDegree),
      false,
    );
    ctx.closePath();
    ctx.fillStyle = color;
    ctx.fill();

    ctx.restore();
  };

  private render = () => {
    const { canvas, ctx } = this.canvas;
    if (!canvas || !ctx) return;
    const { renderData, hoverIdx } = this;
    const { width, height } = this.canvas;

    ctx.clearRect(0, 0, width, height);

    const len = renderData.length;
    for (let i = 0; i < len; i++) {
      const { disabled } = renderData[i];
      const isHover = i === hoverIdx && !disabled;
      if (isHover) continue;
      this.draw(i);
    }
    if (hoverIdx > -1) {
      if (renderData[hoverIdx].disabled) return;
      this.draw(hoverIdx);
    }
  };

  public update = (renderData: ReadonlyArray<PieChartRenderData>) => {
    this.renderData = renderData;
  };

  public isInsideWedge = (x: number, y: number) => {
    const { radius } = this;
    const { width, height } = this.canvas;

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
      const len = this.renderData.length;
      for (let i = 0; i < len; i++) {
        const { startDegree, endDegree } = this.renderData[i];
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

  public styleUpdate = ({
    position,
    radius,
    font,
  }: {
    position: Vector;
    radius: number;
    font: string;
  }) => {
    if (!this.canvas.ctx) return;

    this.position = position;
    this.radius = radius;
    this.canvas.ctx.font = font;
  };

  public reload = () => {
    this.canvas.reload();
  };

  public load = ({ canvas }: PieChartWedgeParams) => {
    this.canvas.load({ canvas });

    if (!this.canvas.canvas) return;

    this.canvas.canvas.style.position = 'absolute';
  };
}

export default Wedge;
