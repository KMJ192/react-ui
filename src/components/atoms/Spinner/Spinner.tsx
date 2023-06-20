import React from 'react';

import type { OVER_RIDABLE_PROPS } from '@src/types/types';

import classNames from 'classnames/bind';
import style from './style.module.scss';
const cx = classNames.bind(style);

type BaseProps = {
  type?: 'type-1' | 'type-2' | 'type-3' | 'type-4';
};

const ELEMENT = 'div';

type Props<T extends React.ElementType> = OVER_RIDABLE_PROPS<T, BaseProps>;

function Spinner<T extends React.ElementType = typeof ELEMENT>(
  { className, type = 'type-1', size, ...props }: Props<T>,
  ref: React.Ref<any>,
) {
  return (
    <ELEMENT
      {...props}
      ref={ref}
      className={cx('spinner', type, className)}
    ></ELEMENT>
  );
}

export type { BaseProps as SpinnerProps };
export default React.forwardRef(Spinner) as typeof Spinner;
