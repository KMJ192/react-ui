import React from 'react';

import type { OVER_RIDABLE_PROPS, SIZE } from '@src/types/types';

import classNames from 'classnames/bind';
import style from './style.module.scss';
const cx = classNames.bind(style);

type BaseProps = {
  type?: 'type-1' | 'type-2' | 'type-3';
  active?: boolean;
  size?: SIZE;
};

const DEFAULT_ELEMENT = 'div';

type Props<T extends React.ElementType> = OVER_RIDABLE_PROPS<T, BaseProps>;

function HamburgerMenu<T extends React.ElementType = typeof DEFAULT_ELEMENT>(
  { as, type = 'type-1', active = false, size = 'md', ...props }: Props<T>,
  ref: React.Ref<React.ElementRef<typeof DEFAULT_ELEMENT>>,
) {
  const ELEMENT = as || DEFAULT_ELEMENT;

  return (
    <ELEMENT
      {...props}
      ref={ref}
      className={cx('hamburger', { active }, type, size)}
    >
      <span></span>
      <span></span>
      <span></span>
    </ELEMENT>
  );
}

export type HamburgerMenuProps = Props<typeof DEFAULT_ELEMENT>;
export default React.forwardRef(HamburgerMenu) as typeof HamburgerMenu;
