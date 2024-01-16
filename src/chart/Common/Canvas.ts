type Params = {
  canvas?: HTMLCanvasElement;
};

class Canvas {
  private dpr: number;

  public canvas: HTMLCanvasElement | null;

  public ctx: CanvasRenderingContext2D | null;

  public width: number;

  public height: number;

  public draw: (() => void) | null;

  constructor(params?: Partial<Params>) {
    this.canvas = params?.canvas ?? null;

    this.ctx = this.canvas?.getContext('2d') ?? null;

    this.dpr = window.devicePixelRatio > 1 ? 2 : 1;

    this.width = 0;

    this.height = 0;

    this.draw = null;
  }

  public reload = () => {
    if (!this.canvas || !this.ctx) return;

    const { dpr } = this;
    this.canvas.style.width = '100%';
    this.canvas.style.height = '100%';

    this.width = this.canvas.clientWidth;
    this.height = this.canvas.clientHeight;

    this.canvas.width = this.width * dpr;
    this.canvas.height = this.height * dpr;
    this.ctx.scale(dpr, dpr);
  };

  public load = ({ canvas }: Params) => {
    if (!canvas) return;

    this.canvas = canvas;

    this.ctx = this.canvas.getContext('2d') ?? null;

    this.reload();
  };
}

export default Canvas;
