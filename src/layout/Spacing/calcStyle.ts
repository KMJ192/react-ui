import type { SpacingProps } from './Spacing';

const getStyle = ({
  direction,
  spacing,
  style,
  unit,
}: Pick<SpacingProps, 'direction' | 'spacing' | 'style' | 'unit'>) => {
  let newStyle = {};
  const isSpacing = typeof spacing === 'number';

  if (isSpacing && direction === 'vertical') {
    newStyle = {
      height: `${spacing}${unit}`,
    };
  } else if (isSpacing && direction === 'horizontal') {
    newStyle = {
      width: `${spacing}${unit}`,
    };
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
