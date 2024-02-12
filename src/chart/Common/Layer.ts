import { debounce } from '@cdkit/common';

type Params = {
  layer: HTMLElement;
  resizeEvents?: Array<() => void>;
  hoverEvents?: Array<(x: number, y: number) => void>;
  clickEvents?: Array<(x: number, y: number) => void>;
};

class Layer {
  public element: HTMLElement | null;

  public width: number;

  public height: number;

  public isObserveResize: boolean;

  public isObserveHover: boolean;

  public isObserveClick: boolean;

  private resizeEvents: Array<() => void>;

  private hoverEvents: Array<(x: number, y: number) => void>;

  private clickEvents: Array<(x: number, y: number) => void>;

  constructor() {
    this.element = null;

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
    const { element: layer } = this;
    if (!layer) return () => {};

    const run: () => void = debounce(() => {
      if (this.element) {
        if (this.element.clientHeight === 0) {
          this.element.style.height = '400px';
        }
        if (this.element.clientWidth === 0) {
          this.element.style.width = '400px';
        }
        const { width, height } = this.element.getBoundingClientRect();
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
    const { element: layer } = this;
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
    const { element: layer } = this;
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
    this.element = layer;
    this.element.style.position = 'relative';
    this.element.style.width = '100%';
    this.element.style.height = '100%';
    const { width, height } = this.element.getBoundingClientRect();
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
