import { CheckboxProps } from './Checkbox';

const getStyle = ({ size }: Pick<CheckboxProps, 'size'>) => {
  let newStyle = {};

  const isSize = typeof size === 'number';
  if (isSize) {
    newStyle = {
      width: size,
      height: size,
    };
  } else {
    return undefined;
  }

  return newStyle;
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
