import Canvas from '../Common/Canvas';
import Vector from '../Common/Vector';
import { FontStyle } from '../Common/types';
import { pieChartDefaultValues } from './defaultVales';
import type { PieChartRenderData } from './types';

type PieChartLabelParams = {
  canvas: HTMLCanvasElement;
};

class Label {
  public canvas: Canvas;

  private isRender: boolean;

  private position: Vector;

  private radius: number;

  private renderData: ReadonlyArray<PieChartRenderData>;

  private initRenderInterval: number;

  private style: FontStyle;

  constructor() {
    this.canvas = new Canvas();

    this.isRender = false;

    this.position = new Vector(0, 0);

    this.radius = 0;

    this.renderData = [];

    this.initRenderInterval = 0;

    this.style = {
      fontSize: 16,
      fontColor: pieChartDefaultValues.fontColor,
      fontFamily: pieChartDefaultValues.fontFamily,
      fontWeight: pieChartDefaultValues.fontWeight,
    };
  }

  private render = () => {
    const { canvas, ctx } = this.canvas;
    if (!canvas || !ctx) return;
    const { clientWidth: width, clientHeight: height } = canvas;
    const { renderData, radius, initRenderInterval, style } = this;

    ctx.clearRect(0, 0, width, height);

    ctx.font = `${style.fontWeight} ${style.fontSize}px ${style.fontFamily}`;

    const angle = (degree: number) => {
      return ((degree - 90) / 180) * Math.PI;
    };

    const len = renderData.length;
    for (let i = 0; i < len; i++) {
      const {
        label,
        labelSize: { width: labelWidth, height: labelHeight },
        midDegree,
        midDegreeCoordinate: { x: midDegreeX, y: midDegreeY },
      } = renderData[i];

      const isHalf = this.position.x <= midDegreeX;

      if (label === '') continue;

      const ptLen = radius * 0.12;

      const labelPointX1 =
        Math.cos(angle(midDegree)) * (ptLen * initRenderInterval) + midDegreeX;
      const labelPointX1Dist = Math.cos(angle(midDegree)) * ptLen + midDegreeX;
      const labelPointY =
        Math.sin(angle(midDegree)) * (ptLen * initRenderInterval) + midDegreeY;
      const labelPointYDist = Math.sin(angle(midDegree)) * ptLen + midDegreeY;
      const labelPointX2 = isHalf
        ? Math.cos(angle(midDegree)) * (ptLen * initRenderInterval) +
          midDegreeX +
          ptLen
        : Math.cos(angle(midDegree)) * (ptLen * initRenderInterval) +
          midDegreeX -
          ptLen;

      ctx.save();

      ctx.strokeStyle = style.fontColor;
      ctx.lineWidth = 0.8;

      ctx.beginPath();
      ctx.moveTo(midDegreeX, midDegreeY);
      ctx.lineTo(labelPointX1, labelPointY);
      ctx.moveTo(labelPointX1Dist, labelPointYDist);
      ctx.lineTo(labelPointX2, labelPointYDist);
      ctx.stroke();
      ctx.closePath();
      ctx.restore();

      const labelX = isHalf
        ? labelPointX1Dist + radius * 0.18
        : labelPointX1Dist - (labelWidth + radius * 0.18);
      const labelY = labelPointYDist + labelHeight / 2;

      ctx.save();
      ctx.globalAlpha = initRenderInterval;
      ctx.fillStyle = style.fontColor;
      ctx.fillText(label, labelX, labelY);
      ctx.restore();
    }
  };

  public update = (renderData: ReadonlyArray<PieChartRenderData>) => {
    this.renderData = renderData;
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

      this.initRenderInterval += 0.009;
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
    style,
  }: {
    position: Vector;
    radius: number;
    style: FontStyle;
  }) => {
    this.position = position;
    this.radius = radius;
    this.style = style;
  };

  public reload = () => {
    this.canvas.reload();
  };

  public load = ({ canvas }: PieChartLabelParams) => {
    this.canvas.load({ canvas });
    if (!this.canvas.canvas) return;

    this.canvas.canvas.style.position = 'absolute';
  };
}

export default Label;
