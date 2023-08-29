import React from 'react';

import type { OVER_RIDABLE_PROPS } from '@src/types/types';

import Thead from './Thead/Thead';
import Tbody from './Tbody/Tbody';
import Tfoot from './Tfoot/Tfoot';
import Tr from './Tr/Tr';
import Th from './Th/Th';
import Td from './Td/Td';
import Caption from './Caption/Caption';

import classNames from 'classnames/bind';
import style from './style.module.scss';
const cx = classNames.bind(style);

type BaseProps = {
  children: React.ReactNode;
};

const DEFAULT_ELEMENT = 'div';

type Props<T extends React.ElementType> = OVER_RIDABLE_PROPS<T, BaseProps>;

function T<T extends React.ElementType = typeof DEFAULT_ELEMENT>(
  { as, children, className, ...props }: Props<T>,
  ref: React.Ref<any>,
) {
  const ELEMENT = as || DEFAULT_ELEMENT;

  return (
    <ELEMENT {...props} ref={ref} className={cx('table-container', className)}>
      <table className={cx('table')}>{children}</table>
    </ELEMENT>
  );
}

const Table = Object.assign(React.forwardRef(T) as typeof T, {
  Caption,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
});

export type TableProps = Props<typeof DEFAULT_ELEMENT>;
export default Table;
