import React from 'react';

import type { OVER_RIDABLE_PROPS } from '@src/types/types';

import classNames from 'classnames/bind';
import style from './style.module.scss';
const cx = classNames.bind(style);

type BaseProps = {
  children?: React.ReactNode;
  type?: 'fade';
};

const ELEMENT = 'div';

type Props<T extends React.ElementType> = OVER_RIDABLE_PROPS<T, BaseProps>;

function Popup<T extends React.ElementType = typeof ELEMENT>(
  { children, type, className, ...props }: Props<T>,
  ref: React.Ref<any>,
) {
  return (
    <ELEMENT {...props} ref={ref} className={cx('popup', className)}>
      {children}
    </ELEMENT>
  );
}

export type { BaseProps as PopupProps };
export default React.forwardRef(Popup) as typeof Popup;
