import Canvas from '../object/canvas';

class Tail extends Canvas {
  private x: number;

  private y: number;

  private vx: number;

  private vy: number;

  private color: string;

  private friction: number;

  private opacity: number;

  constructor() {
    super();
    this.x = 0;
    this.y = 0;
    this.vx = 0;
    this.vy = 0;
    this.color = '';
    this.friction = 0;
    this.opacity = 0;
  }

  public initTail = ({
    x,
    y,
    vy,
    color,
    canvasElement,
  }: {
    x: number;
    y: number;
    vy: number;
    color: string;
    canvasElement: HTMLCanvasElement;
  }) => {
    this.canvasElement = canvasElement;
    this.x = x;
    this.y = y;
    this.vy = vy;
    this.color = color;
    this.friction = 0.985;
  };

  get state() {
    return {
      x: this.x,
      y: this.y,
      vy: this.vy,
      color: this.color,
    };
  }

  public update = () => {
    this.vy *= this.friction;
    this.y += this.vy;
    this.opacity -= this.vy;
  };

  public draw = () => {
    const ctx = this.canvasElement?.getContext('2d');
    if (!ctx) return;

    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.x, this.y, 1, 0, Math.PI * 2);
    ctx.fill();
    ctx.closePath();
  };
}

export default Tail;
