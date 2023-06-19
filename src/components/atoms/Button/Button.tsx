import React from 'react';

import type { OVER_RIDABLE_PROPS } from '@src/types/types';

import type { Variant } from './types';

import classNames from 'classnames/bind';
import style from './style.module.scss';
const cx = classNames.bind(style);

type BaseProps = {
  children?: React.ReactNode;
  variant?: Variant;
  loading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
};

const ELEMENT = 'button';

type Props<T extends React.ElementType> = OVER_RIDABLE_PROPS<T, BaseProps>;

function Button<T extends React.ElementType = typeof ELEMENT>(
  {
    children,
    variant = 'primary',
    loading = false,
    className,
    leftIcon,
    rightIcon,
    ...props
  }: Props<T>,
  ref: React.Ref<any>,
) {
  return (
    <ELEMENT {...props} ref={ref} className={cx('button', variant, className)}>
      {leftIcon && <div className={cx('icon')}>{leftIcon}</div>}
      {children}
      {rightIcon && <div className={cx('icon')}>{rightIcon}</div>}
    </ELEMENT>
  );
}

export type { BaseProps as ButtonProps };
export default React.forwardRef(Button) as typeof Button;
