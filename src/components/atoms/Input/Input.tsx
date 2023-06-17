import React from 'react';

import type { OVER_RIDABLE_PROPS } from '@src/types/types';

import classNames from 'classnames/bind';
import style from './style.module.scss';
const cx = classNames.bind(style);

type BaseProps = {};

const ELEMENT = 'input';

type Props<T extends React.ElementType> = OVER_RIDABLE_PROPS<T, BaseProps>;

function Input<T extends React.ElementType = typeof ELEMENT>(
  { className, ...props }: Props<T>,
  ref: React.Ref<any>,
) {
  return (
    <ELEMENT {...props} ref={ref} className={cx('input', className)}></ELEMENT>
  );
}

export type { BaseProps as InputProps };
export default React.forwardRef(Input) as typeof Input;
