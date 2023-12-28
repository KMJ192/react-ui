import React from 'react';

import type {
  CSS_DISPLAY,
  CSS_DISPLAY_FLEX_DIRECTION,
  OVER_RIDABLE_PROPS,
} from '@src/types/types';

import type { ButtonShape, ButtonVariant } from './types';
import LoadingSpinner from './LoadingSpinner/LoadingSpinner';

import classNames from 'classnames/bind';
import style from '@css/components/Button/style.module.scss';
const cx = classNames.bind(style);

type BaseProps = {
  children?: React.ReactNode;
  variant?: ButtonVariant;
  shape?: ButtonShape;
  display?: CSS_DISPLAY;
  flexDirection?: CSS_DISPLAY_FLEX_DIRECTION;
  centerVertical?: boolean;
  centerHorizontal?: boolean;
  clickEffect?: boolean;
};

const DEFAULT_ELEMENT = 'button';

type Props<T extends React.ElementType> = OVER_RIDABLE_PROPS<T, BaseProps>;

function Button<T extends React.ElementType = typeof DEFAULT_ELEMENT>(
  {
    as,
    children,
    variant = 'primary',
    shape = 'rect',
    display = 'flex',
    flexDirection,
    centerVertical = true,
    centerHorizontal = true,
    clickEffect = true,
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
        'button',
        variant,
        shape,
        display,
        flexDirection,
        centerVertical && 'center-vertical',
        centerHorizontal && 'center-horizontal',
        clickEffect && 'ripple',
        className,
      )}
    >
      {children}
    </ELEMENT>
  );
}

export type ButtonProps = Props<typeof DEFAULT_ELEMENT>;
export default Object.assign(React.forwardRef(Button) as typeof Button, {
  LoadingSpinner,
});
