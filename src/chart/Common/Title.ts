import Canvas from './Canvas';
import Vector from './Vector';
import type { ChartComponentStrategy, Coordinate } from './types';
import { getTextSize } from './utils';

type TitleStyleParams = {
  font: string;
  coordinate: Coordinate;
};

type TitleParams = {
  canvas: HTMLCanvasElement;
  title: string;
};

class Title implements ChartComponentStrategy {
  public name = 'title';

  public canvas: Canvas;

  public title: string;

  private position: Vector;

  constructor() {
    this.canvas = new Canvas();

    this.title = '';

    this.position = new Vector(0, 0);
  }

  public renderer = () => {
    const { ctx } = this.canvas;
    if (!ctx) return;
    const { x, y } = this.position;

    const { width, height } = getTextSize(ctx, this.title);

    ctx.fillText(this.title, x - width / 2, y + height);
    ctx.stroke();
  };

  public styleUpdate = ({ font, coordinate }: TitleStyleParams) => {
    if (this.title === '') return;
    const { ctx } = this.canvas;
    if (!ctx) return;

    ctx.font = font;
    this.position.x = coordinate.x;
    this.position.y = coordinate.y;
  };

  public reload = () => {
    this.canvas.reload();
  };

  public load = ({ canvas, title }: TitleParams) => {
    this.canvas.load({ canvas });
    this.canvas.canvas!.style.position = 'absolute';

    this.title = title;
  };
}

export default Title;
