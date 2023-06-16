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
};

const ELEMENT = 'button';

type Props<T extends React.ElementType> = OVER_RIDABLE_PROPS<T, BaseProps>;

function Button<T extends React.ElementType = typeof ELEMENT>(
  { variant = 'primary', loading = false, children, ...props }: Props<T>,
  ref: React.Ref<any>,
) {
  return (
    <ELEMENT {...props} ref={ref} className={cx('button', variant)}>
      {children}
    </ELEMENT>
  );
}

export type { BaseProps as ButtonProps };
export default React.forwardRef(Button) as typeof Button;
