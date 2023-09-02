import type { FloatProps } from './Float';

const getStyle = ({
  startDirection,
  left,
  right,
  top,
  bottom,
  style,
}: Pick<
  FloatProps,
  'startDirection' | 'left' | 'right' | 'top' | 'bottom' | 'style'
>) => {
  let newStyle = {};
  const isLeft = typeof left === 'number';
  const isRight = typeof right === 'number';
  const isTop = typeof top === 'number';
  const isBottom = typeof bottom === 'number';
  if (startDirection === 'lt') {
    if (isLeft) {
      newStyle = {
        left,
      };
    }
    if (isTop) {
      newStyle = {
        ...newStyle,
        top,
      };
    }
    if (!isLeft && !isTop) {
      return style;
    }
  } else if (startDirection === 'rb') {
    if (isRight) {
      newStyle = {
        ...newStyle,
        right,
      };
    }
    if (isBottom) {
      newStyle = {
        ...newStyle,
        bottom,
      };
    }
    if (!isRight && !isBottom) {
      return style;
    }
  } else {
    return style;
  }

  return style
    ? {
        ...style,
        ...newStyle,
      }
    : newStyle;
};

export { getStyle };
