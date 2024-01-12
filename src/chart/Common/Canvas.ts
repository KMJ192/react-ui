type Params = {
  canvas?: HTMLCanvasElement;
};

class Canvas {
  public canvas: HTMLCanvasElement | null;

  public ctx: CanvasRenderingContext2D | null;

  public draw: (() => void) | null;

  private dpr = 1;

  constructor(params?: Partial<Params>) {
    this.canvas = params?.canvas ?? null;

    this.ctx = this.canvas?.getContext('2d') ?? null;

    this.dpr = window.devicePixelRatio > 1 ? 2 : 1;

    this.draw = null;
  }

  public reload = () => {
    if (!this.canvas || !this.ctx) return;

    const { dpr } = this;

    this.canvas.style.width = '100%';
    this.canvas.style.height = '100%';

    const width = this.canvas.clientWidth;
    const height = this.canvas.clientHeight;

    this.canvas.width = width * dpr;
    this.canvas.height = height * dpr;
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
