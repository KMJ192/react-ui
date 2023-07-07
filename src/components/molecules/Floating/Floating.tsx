import React from 'react';

import type { COMBINE_ELEMENT_PROPS } from '@src/types/types';

import Button from './Button/Button';

import classNames from 'classnames/bind';
import style from './style.module.scss';
const cx = classNames.bind(style);

type BaseProps = {
  children?: React.ReactNode;
  position?: 'tr' | 'tl' | 'br' | 'bl';
};

const ELEMENT = 'div';

type Props<T extends React.ElementType> = COMBINE_ELEMENT_PROPS<T, BaseProps>;

function F<T extends React.ElementType = typeof ELEMENT>(
  { children, position = 'br', ...props }: Props<T>,
  ref: React.Ref<any>,
) {
  return (
    <ELEMENT {...props} ref={ref} className={cx('floating', position)}>
      {children}
    </ELEMENT>
  );
}

export type { BaseProps as ButtonProps };

const Floating = Object.assign(React.forwardRef(F) as typeof F, {
  Button,
});

export type FloatingProps = Props<typeof ELEMENT>;
export default Floating;
