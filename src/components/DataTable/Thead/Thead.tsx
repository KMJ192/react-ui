import React from 'react';

import type { OVER_RIDABLE_PROPS } from '@src/types/types';

import classNames from 'classnames/bind';
import style from '../style.module.scss';
const cx = classNames.bind(style);

type BaseProps = {
  children?: React.ReactNode;
};

const DEFAULT_ELEMENT = 'thead';

type Props<T extends React.ElementType> = OVER_RIDABLE_PROPS<T, BaseProps>;

function Thead<T extends React.ElementType = typeof DEFAULT_ELEMENT>(
  { as, children, className, ...props }: Props<T>,
  ref: React.Ref<any>,
) {
  const ELEMENT = as || DEFAULT_ELEMENT;

  return (
    <ELEMENT {...props} ref={ref} className={cx('thead', className)}>
      {children}
    </ELEMENT>
  );
}

export type TheadProps = Props<typeof DEFAULT_ELEMENT>;
export default React.forwardRef(Thead) as typeof Thead;
