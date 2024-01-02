class Vector {
  private x: number;

  private y: number;

  constructor(x?: number, y?: number) {
    this.x = x ?? 0;
    this.y = y ?? 0;
  }

  get getter() {
    return {
      x: this.x,
      y: this.y,
    };
  }

  public setX(x: number) {
    this.x = x;
  }

  public setY(y: number) {
    this.y = y;
  }

  public setter(x: number, y: number) {
    this.x = x;
    this.y = y;

    return this;
  }

  static add(v1: Vector, v2: Vector) {
    return new Vector(v1.x + v2.x, v1.y + v2.y);
  }

  public add(a: Vector | number, b?: number) {
    if (typeof a === 'number') {
      if (typeof b !== 'number') throw Error('Required Y value');
      this.x += a;
      this.y += b;
    } else {
      this.x += a.x;
      this.y += a.y;
    }

    return this;
  }

  static sub(v1: Vector, v2: Vector) {
    return new Vector(v1.x - v2.x, v1.y - v2.y);
  }

  public sub(a: Vector | number, b?: number) {
    if (typeof a === 'number') {
      if (typeof b !== 'number') throw Error('Required Y value');
      this.x -= a;
      this.y -= b;
    } else {
      this.x -= a.x;
      this.y -= a.y;
    }

    return this;
  }

  public mult(v: Vector | number) {
    if (typeof v === 'number') {
      this.x *= v;
      this.y *= v;
    } else {
      this.x *= v.x;
      this.y *= v.y;
    }

    return this;
  }

  public dist(v: Vector) {
    const dx = this.x - v.x;
    const dy = this.y - v.y;

    return Math.sqrt(dx * dx + dy * dy);
  }
}

export default Vector;
