import type { SwitchProps } from './Switch';

const getStyle = ({
  width,
  height,
  bulletSize,
}: Pick<SwitchProps, 'width' | 'height' | 'bulletSize'>) => {
  let switchStyle:
    | {
        width?: number;
        height?: number;
      }
    | undefined;
  let bulletStyle:
    | {
        width: number;
        height: number;
      }
    | undefined;
  let fontStyle: { fontSize: number } | undefined;

  const isWidth = typeof width === 'number';
  const isHeight = typeof height === 'number';
  const isBulletSize = typeof bulletSize === 'number';

  if (isWidth) {
    switchStyle = {
      width,
    };
  }
  if (isHeight) {
    switchStyle = {
      ...switchStyle,
      height,
    };
    fontStyle = {
      fontSize: height > 8 ? height - 8 : height,
    };
  }
  if (isBulletSize) {
    bulletStyle = {
      width: bulletSize,
      height: bulletSize,
    };
  }

  return {
    switchStyle,
    bulletStyle,
    fontStyle,
  };
};

export { getStyle };
