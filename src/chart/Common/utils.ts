export const getTextSize = (ctx: CanvasRenderingContext2D, text: string) => {
  const { width, actualBoundingBoxAscent, actualBoundingBoxDescent } =
    ctx.measureText(text);
  const height = actualBoundingBoxAscent + actualBoundingBoxDescent;

  return {
    width,
    height,
  };
};
