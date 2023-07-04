import React from 'react';

import type { OVER_RIDABLE_PROPS } from '@src/types/types';

import classNames from 'classnames/bind';
import style from './style.module.scss';
const cx = classNames.bind(style);

type BaseProps = {
  children?: React.ReactNode;
};

const ELEMENT = 'div';

type Props<T extends React.ElementType> = OVER_RIDABLE_PROPS<T, BaseProps>;

function Flex<T extends React.ElementType = typeof ELEMENT>(
  { children, className, ...props }: Props<T>,
  ref: React.Ref<any>,
) {
  return (
    <ELEMENT {...props} ref={ref} className={cx(className)}>
      {children}
    </ELEMENT>
  );
}

export type FlexProps = Props<typeof ELEMENT>;
export default React.forwardRef(Flex) as typeof Flex;
