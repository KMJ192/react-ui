import React from 'react';

import type { OVER_RIDABLE_PROPS } from '@src/types/types';

import GridItem from './GridItem/GridItem';

import classNames from 'classnames/bind';
import style from './style.module.scss';
const cx = classNames.bind(style);

type BaseProps = {
  children?: React.ReactNode;
};

const ELEMENT = 'div';

type Props<T extends React.ElementType> = OVER_RIDABLE_PROPS<T, BaseProps>;

function G<T extends React.ElementType = typeof ELEMENT>(
  { children, className, ...props }: Props<T>,
  ref: React.Ref<any>,
) {
  return (
    <ELEMENT {...props} ref={ref} className={cx(className)}>
      {children}
    </ELEMENT>
  );
}

const Grid = Object.assign(React.forwardRef(G) as typeof G, {
  GridItem,
});

export type GridProps = Props<typeof ELEMENT>;
export default Grid;
