import React from 'react';

import type { OVER_RIDABLE_PROPS } from '@src/types/types';

import classNames from 'classnames/bind';
import style from './style.module.scss';
const cx = classNames.bind(style);

type BaseProps = {
  type?: 'type-1' | 'type-2';
};

const DEFAULT_ELEMENT = 'div';

type Props<T extends React.ElementType> = OVER_RIDABLE_PROPS<T, BaseProps>;

function Spinner<T extends React.ElementType = typeof DEFAULT_ELEMENT>(
  { as, className, type = 'type-1', ...props }: Props<T>,
  ref: React.Ref<React.ElementRef<typeof DEFAULT_ELEMENT>>,
) {
  const ELEMENT = as || DEFAULT_ELEMENT;

  return (
    <ELEMENT {...props} ref={ref} className={cx('spinner', type, className)} />
  );
}

export type SpinnerProps = Props<typeof DEFAULT_ELEMENT>;
export default React.forwardRef(Spinner) as typeof Spinner;
