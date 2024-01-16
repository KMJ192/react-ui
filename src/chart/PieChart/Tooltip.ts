import Canvas from '../Common/Canvas';
import Vector from '../Common/Vector';
import { ChartComponentStrategy } from '../Common/types';

export type TooltipDataInfo = {
  label: string;
  color: string;
  labelWidth: number;
  labelHeight: number;
};

type TooltipParams = {
  canvas: HTMLCanvasElement;
};

class Tooltip implements ChartComponentStrategy {
  public canvas: Canvas;

  public dataInfo: Array<TooltipDataInfo>;

  public position: Vector;

  public label: string;

  public width: number;

  public height: number;

  public visibleIdx: number;

  public markSize: number;

  public markColor: string;

  public markTextGap: number;

  public labelColor: string;

  public backgroundColor: string;

  constructor() {
    this.canvas = new Canvas();

    this.dataInfo = [];

    this.label = '';

    this.position = new Vector();

    this.width = 100;

    this.height = 100;

    this.visibleIdx = -1;

    this.markColor = '';

    this.markSize = 0;

    this.markTextGap = 0;

    this.labelColor = '#000';

    this.backgroundColor = '#fff';
  }

  public clear = () => {
    const { canvas, ctx } = this.canvas;
    if (!canvas || !ctx) return;

    ctx.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight);
  };

  private render = () => {
    const { ctx } = this.canvas;
    if (!ctx) return;
    const {
      position: { x, y },
      label,
      width,
      height,
      markSize,
      markTextGap,
      markColor,
      labelColor,
      backgroundColor,
    } = this;

    const markX = x + markSize;
    const markY = y + markSize * 0.9;

    const textX = markX + markSize + markTextGap;
    const textY = markY + markSize;

    this.clear();

    ctx.save();
    ctx.beginPath();

    ctx.fillStyle = backgroundColor;
    ctx.roundRect(x, y, width, height, [4, 4, 4, 4]);
    ctx.fill();
    ctx.closePath();

    ctx.fillStyle = labelColor;
    ctx.fillText(label, textX, textY);
    ctx.stroke();

    ctx.beginPath();
    ctx.fillStyle = markColor;
    ctx.roundRect(markX, markY, markSize, markSize, [2, 2, 2, 2]);
    ctx.fill();

    ctx.closePath();

    ctx.restore();
  };

  public update = ({
    labelColor,
    backgroundColor,
    dataInfo,
  }: {
    labelColor: string;
    backgroundColor: string;
    dataInfo: Array<TooltipDataInfo>;
  }) => {
    this.dataInfo = dataInfo;
    this.labelColor = labelColor;
    this.backgroundColor = backgroundColor;
  };

  public renderer = () => {
    this.render();
  };

  public reload = () => {
    this.canvas.reload();
  };

  public defaultStyleSetter = ({ markTextGap }: { markTextGap: number }) => {
    this.markTextGap = markTextGap;
  };

  public load = ({ canvas }: TooltipParams) => {
    this.canvas.load({ canvas });

    this.canvas.canvas!.style.position = 'absolute';
  };
}
export default Tooltip;
