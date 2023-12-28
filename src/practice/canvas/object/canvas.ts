type CanvasInit = {
  canvasElement: HTMLCanvasElement;
};

class Canvas {
  public canvasElement: HTMLCanvasElement | null;

  private devicePixelRatio: number;

  constructor() {
    this.canvasElement = null;

    this.devicePixelRatio = 1;
  }

  public init = ({ canvasElement }: CanvasInit): boolean => {
    if (!window) return false;

    this.canvasElement = canvasElement;
    this.devicePixelRatio = window.devicePixelRatio;

    return true;
  };

  public initCanvasSize = (width: number, height: number): boolean => {
    if (!this.canvasElement) return false;

    this.canvasElement.width = width;
    this.canvasElement.height = height;
    this.canvasElement.style.width = `${width}px`;
    this.canvasElement.style.height = `${height}px`;

    return true;
  };

  public init2DContext = (): [boolean, CanvasRenderingContext2D | null] => {
    if (!this.canvasElement) return [false, null];

    const ctx = this.canvasElement.getContext('2d');

    if (!ctx) return [false, null];

    ctx.scale(this.devicePixelRatio, this.devicePixelRatio);

    return [true, ctx];
  };
}

export default Canvas;
