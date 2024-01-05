import { throttle } from '@cdkit/common';

type Params = {
  canvas?: HTMLCanvasElement;
};

class Canvas {
  public canvas: HTMLCanvasElement | null;

  public ctx: CanvasRenderingContext2D | null;

  private dpr = 1;

  constructor(params?: Partial<Params>) {
    this.canvas = params?.canvas ?? null;

    this.ctx = this.canvas?.getContext('2d') ?? null;

    this.dpr = window.devicePixelRatio > 1 ? 2 : 1;
  }

  static init = (params: Params) => new Canvas(params);

  private load = throttle<any>(() => {
    if (!this.canvas || !this.ctx) return;

    const { dpr } = this;

    this.canvas.style.width = '100%';
    this.canvas.style.height = '100%';

    const { width, height } = this.canvas.getBoundingClientRect();

    this.canvas.width = width * dpr;
    this.canvas.height = height * dpr;
    this.ctx.scale(dpr, dpr);

    this.ctx.fillRect(0, 0, 100, 100);
    console.log('draw');
  }, 800);

  public init = ({ canvas }: Params) => {
    if (!canvas) return () => {};

    this.canvas = canvas;

    this.ctx = this.canvas.getContext('2d') ?? null;

    this.load();

    window.addEventListener('resize', this.load);

    return () => {
      window.removeEventListener('resize', this.load);
    };
  };
}

export default Canvas;
