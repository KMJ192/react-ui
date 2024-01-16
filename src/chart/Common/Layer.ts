import { debounce } from '@src/utils/utils';

type Params = {
  layer: HTMLElement;
  resizeEvents?: Array<() => void>;
  hoverEvents?: Array<(x: number, y: number) => void>;
  clickEvents?: Array<(x: number, y: number) => void>;
};

class Layer {
  public layer: HTMLElement | null;

  public width: number;

  public height: number;

  public isObserveResize: boolean;

  public isObserveHover: boolean;

  public isObserveClick: boolean;

  private resizeEvents: Array<() => void>;

  private hoverEvents: Array<(x: number, y: number) => void>;

  private clickEvents: Array<(x: number, y: number) => void>;

  constructor() {
    this.layer = null;

    this.width = 0;

    this.height = 0;

    this.resizeEvents = [];

    this.hoverEvents = [];

    this.clickEvents = [];

    this.isObserveClick = true;

    this.isObserveHover = true;

    this.isObserveResize = true;
  }

  private resize = () => {
    const { layer } = this;
    if (!layer) return () => {};

    const run: () => void = debounce(() => {
      if (this.layer) {
        const { width, height } = this.layer.getBoundingClientRect();
        this.width = width;
        this.height = height;
      }

      if (!this.isObserveResize) return;

      this.resizeEvents.forEach((event) => {
        event();
      });
    }, 50);

    const observer = new ResizeObserver(run);
    observer.observe(layer);
    return () => {
      observer.disconnect();
    };
  };

  private hover = () => {
    const { layer } = this;
    if (!layer) return () => {};

    const run = (e: MouseEvent) => {
      if (!this.isObserveHover) return;

      const bbox = layer.getBoundingClientRect();
      const { clientX, clientY } = e;
      const x = clientX - bbox.left;
      const y = clientY - bbox.top;

      this.hoverEvents.forEach((event) => {
        event(x, y);
      });
    };

    layer.addEventListener('mousemove', run);
    return () => {
      layer.removeEventListener('mousemove', run);
    };
  };

  private click = () => {
    const { layer } = this;
    if (!layer) return () => {};

    const run = (e: MouseEvent) => {
      if (!this.isObserveClick) return;
      const bbox = layer.getBoundingClientRect();
      const { clientX, clientY } = e;
      const x = clientX - bbox.left;
      const y = clientY - bbox.top;

      this.clickEvents.forEach((event) => {
        event(x, y);
      });
    };

    layer.addEventListener('click', run);
    return () => {
      layer.removeEventListener('click', run);
    };
  };

  public load = ({
    layer,
    resizeEvents = [],
    hoverEvents = [],
    clickEvents = [],
  }: Params) => {
    this.layer = layer;
    this.layer.style.position = 'relative';
    this.layer.style.width = '100%';
    this.layer.style.height = '100%';
    const { width, height } = this.layer.getBoundingClientRect();
    this.width = width;
    this.height = height;

    this.resizeEvents = resizeEvents;
    this.hoverEvents = hoverEvents;
    this.clickEvents = clickEvents;

    const unmountClick = this.click();
    const unmountHover = this.hover();
    const unmountResize = this.resize();

    return () => {
      unmountClick();
      unmountHover();
      unmountResize();
    };
  };
}

export default Layer;
