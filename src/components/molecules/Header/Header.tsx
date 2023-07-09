import React from 'react';

import type { COMBINE_ELEMENT_PROPS } from '@src/types/types';

import Left from './Left/Left';
import Right from './Right/Right';
import Mid from './Mid/Mid';

import classNames from 'classnames/bind';
import style from './style.module.scss';
const cx = classNames.bind(style);

type BaseProps = {
  children?: React.ReactNode;
};

const ELEMENT = 'div';

type Props<T extends React.ElementType> = COMBINE_ELEMENT_PROPS<T, BaseProps>;

function Header<T extends React.ElementType = typeof ELEMENT>(
  { children, className, ...props }: Props<T>,
  ref: React.Ref<any>,
) {
  return (
    <ELEMENT {...props} ref={ref} className={cx('header', className)}>
      {children}
    </ELEMENT>
  );
}

export type HeaderProps = Props<typeof ELEMENT>;
export default Object.assign(React.forwardRef(Header) as typeof Header, {
  Left,
  Mid,
  Right,
});
