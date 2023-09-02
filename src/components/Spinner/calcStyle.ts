import type { SpinnerProps } from './Spinner';

const getStyle = ({
  size,
  borderWidth,
  style,
}: Pick<SpinnerProps, 'size' | 'borderWidth' | 'style'>) => {
  let newStyle = {};
  const isSize = typeof size === 'number';
  const isBorderWidth = typeof borderWidth === 'number';

  if (isSize) {
    newStyle = {
      width: size,
      height: size,
      fontSize: size,
    };
  }

  if (isBorderWidth) {
    newStyle = {
      ...newStyle,
      borderWidth,
    };
  }

  if (!isSize && !isBorderWidth) {
    return style;
  }
  return style
    ? {
        ...style,
        newStyle,
      }
    : newStyle;
};

export { getStyle };
