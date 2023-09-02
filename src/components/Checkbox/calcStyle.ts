import { CheckboxProps } from './Checkbox';

const getStyle = ({ size, style }: Pick<CheckboxProps, 'size' | 'style'>) => {
  let newStyle = {};

  const isSize = typeof size === 'number';
  if (isSize) {
    newStyle = {
      width: size,
      height: size,
    };
  }

  return style
    ? {
        ...newStyle,
        ...style,
      }
    : newStyle;
};

const getMarkSize = (size?: number) => {
  const isSize = typeof size === 'number';
  return isSize
    ? {
        fontSize: size,
      }
    : undefined;
};

export { getStyle, getMarkSize };
