import type { ProgressBarProps } from './ProgressBar';

const getStyle = ({
  height,
  style,
}: Pick<ProgressBarProps, 'height' | 'style'>) => {
  let newStyle = {};
  const isHeight = typeof height === 'number';
  if (isHeight) {
    newStyle = {
      height,
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
