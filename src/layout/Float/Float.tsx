import React from 'react';

import type {
  CSS_DISPLAY,
  CSS_DISPLAY_FLEX_DIRECTION,
  OVER_RIDABLE_PROPS,
} from '@src/types/types';

import { getStyle } from './calcStyle';

import classNames from 'classnames/bind';
import style from '@css/layout/Float/style.module.scss';
const cx = classNames.bind(style);

type BaseProps = {
  children?: React.ReactNode;
  startDirection?: 'lt' | 'lb' | 'rt' | 'rb';
  left?: number;
  right?: number;
  top?: number;
  bottom?: number;
  display?: CSS_DISPLAY;
  flexDirection?: CSS_DISPLAY_FLEX_DIRECTION;
};

const DEFAULT_ELEMENT = 'div';

type Props<T extends React.ElementType> = OVER_RIDABLE_PROPS<T, BaseProps>;

function Float<T extends React.ElementType = typeof DEFAULT_ELEMENT>(
  {
    as,
    children,
    startDirection = 'lt',
    left,
    right,
    top,
    bottom,
    display,
    flexDirection,
    style,
    className,
    ...props
  }: Props<T>,
  ref: React.Ref<React.ElementRef<typeof DEFAULT_ELEMENT>>,
) {
  const ELEMENT = as || DEFAULT_ELEMENT;
  const curStyle = getStyle({
    left,
    right,
    top,
    bottom,
    style,
    startDirection,
  });

  return (
    <ELEMENT
      {...props}
      ref={ref}
      style={curStyle}
      className={cx('float', display, flexDirection, startDirection, className)}
    >
      {children}
    </ELEMENT>
  );
}

export type FloatProps = Props<typeof DEFAULT_ELEMENT>;
export default React.forwardRef(Float) as typeof Float;
