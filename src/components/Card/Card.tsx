import React from 'react';

import type {
  CSS_DISPLAY,
  CSS_DISPLAY_FLEX_DIRECTION,
  OVER_RIDABLE_PROPS,
} from '@src/types/types';

import classNames from 'classnames/bind';
import style from '@css/components/Card/style.module.scss';
const cx = classNames.bind(style);

type BaseProps = {
  display?: CSS_DISPLAY;
  flexDirection?: CSS_DISPLAY_FLEX_DIRECTION;
  children?: React.ReactNode;
  centerVertical?: boolean;
  centerHorizontal?: boolean;
};

const DEFAULT_ELEMENT = 'div';

type Props<T extends React.ElementType> = OVER_RIDABLE_PROPS<T, BaseProps>;

function Card<T extends React.ElementType = typeof DEFAULT_ELEMENT>(
  {
    as,
    display = 'flex',
    flexDirection,
    centerVertical = false,
    centerHorizontal = false,
    children,
    className,
    ...props
  }: Props<T>,
  ref: React.Ref<React.ElementRef<typeof DEFAULT_ELEMENT>>,
) {
  const ELEMENT = as || DEFAULT_ELEMENT;

  return (
    <ELEMENT
      {...props}
      ref={ref}
      className={cx(
        'card',
        display,
        flexDirection,
        centerVertical && 'center-vertical',
        centerHorizontal && 'center-horizontal',
        className,
      )}
    >
      {children}
    </ELEMENT>
  );
}

export type CardProps = Props<typeof DEFAULT_ELEMENT>;
export default React.forwardRef(Card) as typeof Card;
