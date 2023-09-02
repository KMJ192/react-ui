import type { SpacingProps } from './Spacing';

const getStyle = ({
  direction,
  spacing,
  style,
}: Pick<SpacingProps, 'direction' | 'spacing' | 'style'>) => {
  let newStyle = {};
  const isSpacing = typeof spacing === 'number';

  if (isSpacing && direction === 'vertical') {
    newStyle = {
      height: spacing,
    };
  } else if (isSpacing && direction === 'horizontal') {
    newStyle = {
      width: spacing,
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
