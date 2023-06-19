import React from 'react';

import type { OVER_RIDABLE_PROPS } from '@src/types/types';

import classNames from 'classnames/bind';
import style from './style.module.scss';
const cx = classNames.bind(style);

type BaseProps = {
  type?: 'type-1' | 'type-2' | 'type-3' | 'type-4';
  active?: boolean;
};

const DEFAULT_COMPONENT_ELEMENT = 'div';

type Props<T extends React.ElementType> = OVER_RIDABLE_PROPS<T, BaseProps>;

function HamburgerMenu<
  T extends React.ElementType = typeof DEFAULT_COMPONENT_ELEMENT,
>(
  { type = 'type-1', active = false, as, ...props }: Props<T>,
  ref: React.Ref<any>,
) {
  const ELEMENT = DEFAULT_COMPONENT_ELEMENT;

  return (
    <ELEMENT
      {...props}
      ref={ref}
      className={cx('hamburger', active && 'active', type)}
    >
      <span></span>
      <span></span>
      <span></span>
    </ELEMENT>
  );
}

export type { BaseProps as HamburgerProps };
export default React.forwardRef(HamburgerMenu) as typeof HamburgerMenu;
