import React from 'react';

import type { OVER_RIDABLE_PROPS } from '@src/types/types';

import classNames from 'classnames/bind';
import style from '../style.module.scss';
const cx = classNames.bind(style);

type BaseProps = {
  children?: React.ReactNode;
};

const DEFAULT_ELEMENT = 'td';

type Props<T extends React.ElementType> = OVER_RIDABLE_PROPS<T, BaseProps>;

function Td<T extends React.ElementType = typeof DEFAULT_ELEMENT>(
  { as, children, className, ...props }: Props<T>,
  ref: React.Ref<React.ElementRef<typeof DEFAULT_ELEMENT>>,
) {
  const ELEMENT = as || DEFAULT_ELEMENT;

  return (
    <ELEMENT {...props} ref={ref} className={cx('td', className)}>
      {children}
    </ELEMENT>
  );
}

export type TdProps = Props<typeof DEFAULT_ELEMENT>;
export default React.forwardRef(Td) as typeof Td;
