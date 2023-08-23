import React from 'react';

import classNames from 'classnames/bind';
import style from './style.module.scss';
const cx = classNames.bind(style);

import type { OVER_RIDABLE_PROPS } from '@src/types/types';

type BaseProps = {
  children?: React.ReactNode;
};

const DEFAULT_ELEMENT = 'div';

type Props<T extends React.ElementType> = OVER_RIDABLE_PROPS<T, BaseProps>;

function Flex<T extends React.ElementType = typeof DEFAULT_ELEMENT>(
  { as, children, className, ...props }: Props<T>,
  ref: React.Ref<any>,
) {
  const ELEMENT = as || DEFAULT_ELEMENT;

  return (
    <ELEMENT {...props} ref={ref} className={cx('flex', className)}>
      {children}
    </ELEMENT>
  );
}

export type FlexProps = Props<typeof DEFAULT_ELEMENT>;
export default React.forwardRef(Flex) as typeof Flex;
