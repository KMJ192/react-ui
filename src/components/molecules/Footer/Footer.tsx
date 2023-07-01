import React from 'react';

import type { OVER_RIDABLE_PROPS } from '@src/types/types';

import Left from './Left/Left';
import Mid from './Mid/Mid';
import Right from './Right/Right';

import classNames from 'classnames/bind';
import style from './style.module.scss';
const cx = classNames.bind(style);

type BaseProps = {
  children?: React.ReactNode;
};

const ELEMENT = 'div';

type Props<T extends React.ElementType> = OVER_RIDABLE_PROPS<T, BaseProps>;

function Footer<T extends React.ElementType = typeof ELEMENT>(
  { children, className, ...props }: Props<T>,
  ref: React.Ref<any>,
) {
  return (
    <ELEMENT {...props} ref={ref} className={cx('footer', className)}>
      {children}
    </ELEMENT>
  );
}

export type FooterProps = Props<typeof ELEMENT>;
export default Object.assign(React.forwardRef(Footer) as typeof Footer, {
  Left,
  Mid,
  Right,
});
