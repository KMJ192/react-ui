export type AntiAliasingParam = {
  ctx: CanvasRenderingContext2D;
  canvasWidth: number;
  canvasHeight: number;
};

export const antiAliasing2DContext = ({
  ctx,
  canvasWidth,
  canvasHeight,
}: AntiAliasingParam) => {
  const dpr = window.devicePixelRatio;
  const { canvas } = ctx;
  canvas.width = canvasWidth * dpr;
  canvas.height = canvasHeight * dpr;
  canvas.style.width = `${canvasWidth}px`;
  canvas.style.height = `${canvasHeight}px`;
  ctx.scale(dpr, dpr);
};

export const randomNumber = (min: number, max: number) => {
  return Math.random() * (max - min + 1) + min;
};
