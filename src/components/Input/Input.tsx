import React from 'react';

import type { COMBINE_ELEMENT_PROPS } from '@src/types/types';

import classNames from 'classnames/bind';
import style from './style.module.scss';
const cx = classNames.bind(style);

type BaseProps = {
  error?: boolean;
};

const ELEMENT = 'input';

type Props<T extends React.ElementType> = COMBINE_ELEMENT_PROPS<T, BaseProps>;

function Input<T extends React.ElementType = typeof ELEMENT>(
  { error, className, ...props }: Props<T>,
  ref: React.Ref<React.ElementRef<typeof ELEMENT>>,
) {
  return (
    <ELEMENT
      {...props}
      ref={ref}
      className={cx('input', { error }, className)}
    ></ELEMENT>
  );
}

export type InputProps = Props<typeof ELEMENT>;
export default React.forwardRef(Input) as typeof Input;
