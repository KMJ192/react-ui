type Params = {
  canvas: HTMLCanvasElement;
  width: number;
  height: number;
  antiAliasing: boolean;
};

class Canvas {
  private dpr = window.devicePixelRatio > 1 ? 2 : 1;

  public canvas: HTMLCanvasElement | null;

  public ctx: CanvasRenderingContext2D | null;

  public width: number;

  public height: number;

  private antiAliasing: boolean;

  constructor(params?: Partial<Params>) {
    this.canvas = params?.canvas ?? null;

    this.ctx = this.canvas?.getContext('2d') ?? null;

    this.width = params?.width ?? 0;

    this.height = params?.height ?? 0;

    this.antiAliasing = params?.antiAliasing ?? false;
  }

  static init = (params: Params) => new Canvas(params);

  public init = ({ canvas, width, height }: Params) => {
    this.canvas = canvas;

    this.width = width;

    this.height = height;

    this.ctx = this.canvas.getContext('2d') ?? null;
  };

  public resize = () => {
    if (!this.canvas || !this.ctx) return;

    const { width, height, dpr } = this;

    this.canvas.style.width = `${width}px`;
    this.canvas.style.height = `${height}px`;

    this.canvas.width = width * dpr;
    this.canvas.height = height * dpr;
    this.ctx.scale(dpr, dpr);
  };
}

export default Canvas;
