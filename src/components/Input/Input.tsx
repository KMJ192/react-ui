import React from 'react';

import type { OVER_RIDABLE_PROPS } from '@src/types/types';

import classNames from 'classnames/bind';
import style from './style.module.scss';
const cx = classNames.bind(style);

type BaseProps = {
  error?: boolean;
};

const DEFAULT_ELEMENT = 'input';

type Props<T extends React.ElementType> = OVER_RIDABLE_PROPS<T, BaseProps>;

function Input<T extends React.ElementType = typeof DEFAULT_ELEMENT>(
  { as, error, className, ...props }: Props<T>,
  ref: React.Ref<React.ElementRef<typeof DEFAULT_ELEMENT>>,
) {
  const ELEMENT = as || DEFAULT_ELEMENT;

  return (
    <ELEMENT
      {...props}
      ref={ref}
      className={cx('input', { error }, className)}
    ></ELEMENT>
  );
}

export type InputProps = Props<typeof DEFAULT_ELEMENT>;
export default React.forwardRef(Input) as typeof Input;
