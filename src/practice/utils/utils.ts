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

/**
 * 두 값을 받아서 그 사이 랜덤 숫자를 반환
 * @param min 최소값
 * @param max 최대값
 * @returns number
 */
export const randomNumber = (min: number, max: number) => {
  return Math.random() * (max - min + 1) + min;
};

/**
 * 직삼각형의 가장 긴 빗변 구하기 (피타고라스의 정리)
 * @param x 빗변1
 * @param y 빗변2
 * @returns number
 */
export const hypotenuse = (x: number, y: number) => {
  return Math.sqrt(x ** 2 + y ** 2);
};
