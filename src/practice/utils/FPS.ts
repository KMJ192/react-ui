class FPS {
  private interval: number;

  private now: number;

  private delta: number;

  private then: number;

  private nextFrame: (() => void) | null;

  constructor() {
    this.interval = 0;

    this.now = 0;

    this.delta = 0;

    this.then = 0;

    this.nextFrame = null;
  }

  private animate = async () => {
    if (!this.nextFrame) return;

    // if (!window) {
    //   await new Promise((res) => {
    //     setTimeout(res, 500);
    //   });
    //   this.animate();
    //   return;
    // }

    window.requestAnimationFrame(this.animate);

    this.now = Date.now();

    this.delta = this.now - this.then;

    if (this.delta < this.interval) return;

    this.nextFrame();

    this.then = this.now - (this.delta % this.interval);
  };

  public init = ({ fps = 60 }: { fps?: number }) => {
    this.interval = 1000 / fps;

    this.now = 0;

    this.delta = 0;

    this.then = 0;

    this.nextFrame = null;
  };

  public execute = (callback: () => void) => {
    this.then = Date.now();
    this.nextFrame = callback;
    this.animate();
  };
}

export default FPS;
