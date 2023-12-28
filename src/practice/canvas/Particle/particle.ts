import { randomNumber } from '../../utils/utils';

type ParticleInit = {
  ctx: CanvasRenderingContext2D;
  x: number;
  y: number;
  vy: number;
  acc: number;
  radius: number;
};

interface ParticleImpl {
  init: (init: ParticleInit) => void;
  update: () => void;
  draw: () => void;
}

class Particle implements ParticleImpl {
  private x: number;

  private y: number;

  private vy: number;

  private acc: number;

  private radius: number;

  private radian: number = Math.PI / 180;

  private ctx: CanvasRenderingContext2D | null;

  private canvas: HTMLCanvasElement | null;

  constructor() {
    this.ctx = null;
    this.canvas = null;
    this.x = 0;
    this.y = 0;
    this.vy = 0;
    this.acc = 0;
    this.radius = 0;
    this.radian = Math.PI / 180;
  }

  public init = ({ ctx, x, y, radius, vy, acc }: ParticleInit) => {
    this.ctx = ctx;
    this.canvas = ctx.canvas;
    this.ctx.fillStyle = 'orange';
    this.x = x;
    this.y = y;
    this.vy = vy;
    this.acc = acc;
    this.radius = radius;
  };

  public update = () => {
    this.vy *= this.acc;
    this.y += this.vy;

    const canvasHeight = this.canvas?.height ?? 0;
    if (this.y - this.radius > canvasHeight) {
      const canvasWidth = this.canvas?.width ?? 0;
      this.x = randomNumber(0, canvasWidth - 200);
      this.y = randomNumber(0, canvasHeight - 200);
      this.radius = randomNumber(20, 40);
      this.vy = randomNumber(1, 5);

      this.y = -this.radius;
    }
  };

  public draw = () => {
    if (!this.ctx) return;

    this.ctx.beginPath();
    this.ctx.arc(this.x, this.y, this.radius, 0, this.radian * 360);
    this.ctx.fill();
    this.ctx.closePath();
  };
}

export default Particle;
