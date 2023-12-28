import Canvas from '../object/canvas';

class Particle extends Canvas {
  private ctx: CanvasRenderingContext2D | null;

  private x: number;

  private y: number;

  private vx: number;

  private vy: number;

  private opacity: number;

  private gravity: number;

  private friction: number;

  constructor() {
    super();
    this.ctx = null;
    this.x = 0;
    this.y = 0;
    this.vx = 0;
    this.vy = 0;
    this.opacity = 0;
    this.gravity = 0;
    this.friction = 0;
  }

  get state() {
    return {
      x: this.x,
      y: this.y,
      vx: this.vx,
      vy: this.vy,
      opacity: this.opacity,
      gravity: this.gravity,
      friction: this.friction,
    };
  }

  public initParticle = ({
    canvasElement,
    x,
    y,
    vx,
    vy,
    opacity,
  }: {
    canvasElement: HTMLCanvasElement;
    x: number;
    y: number;
    vx: number;
    vy: number;
    opacity: number;
  }) => {
    this.x = x;
    this.y = y;
    this.vx = vx;
    this.vy = vy;
    this.opacity = opacity;
    this.gravity = 0.12;
    this.friction = 0.93;
    this.canvasElement = canvasElement;
    this.ctx = this.canvasElement?.getContext('2d') ?? null;
  };

  public update = () => {
    this.vy += this.gravity;

    this.vx *= this.friction;
    this.vy *= this.friction;

    this.x += this.vx;
    this.y += this.vy;

    this.opacity -= 0.02;
  };

  public draw = () => {
    if (!this.ctx) return;

    this.ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
    this.ctx.beginPath();
    this.ctx.arc(this.x, this.y, 2, 0, Math.PI * 2);
    this.ctx.fill();
    this.ctx.closePath();
  };
}

export default Particle;
