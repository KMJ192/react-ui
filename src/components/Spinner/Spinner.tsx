import React from 'react';

import type { OVER_RIDABLE_PROPS } from '@src/types/types';
import Styled from './styled';
import { COLOR } from '@src/color/color';

type BaseProps = {
  type?: 'type-1' | 'type-2' | 'type-3';
  size?: number;
  borderWidth?: number;
  color?: string;
  color2?: string;
};

const DEFAULT_ELEMENT = 'div';

type Props<T extends React.ElementType> = OVER_RIDABLE_PROPS<T, BaseProps>;

function Spinner<T extends React.ElementType = typeof DEFAULT_ELEMENT>(
  {
    as,
    className,
    type = 'type-1',
    size = 24,
    borderWidth = 4,
    color = COLOR.LIGHT.primary300,
    color2 = COLOR.LIGHT.primary500,
    ...props
  }: Props<T>,
  ref: React.Ref<any>,
) {
  const ELEMENT = as || DEFAULT_ELEMENT;

  if (type === 'type-2') {
    return (
      <Styled.Type2
        {...props}
        as={ELEMENT}
        size={size}
        color={color}
        color2={color2}
        borderWidth={borderWidth}
        ref={ref}
        className={className}
      ></Styled.Type2>
    );
  }

  if (type === 'type-3') {
    return (
      <Styled.Type3
        {...props}
        as={ELEMENT}
        color={color}
        size={size}
        borderWidth={borderWidth}
        ref={ref}
        className={className}
      ></Styled.Type3>
    );
  }

  return (
    <Styled.Type1
      {...props}
      as={ELEMENT}
      size={size}
      borderWidth={borderWidth}
      color={color}
      ref={ref}
      className={className}
    ></Styled.Type1>
  );
}

export type SpinnerProps = Props<typeof DEFAULT_ELEMENT>;
export type SpinnerBaseProps = BaseProps;
export default React.forwardRef(Spinner) as typeof Spinner;
