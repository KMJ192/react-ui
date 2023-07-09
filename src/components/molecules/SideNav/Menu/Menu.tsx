import React from 'react';

import type { COMBINE_ELEMENT_PROPS } from '@src/types/types';

import classNames from 'classnames/bind';
import style from './style.module.scss';
const cx = classNames.bind(style);

type BaseProps = {
  selected?: boolean;
  disabled?: boolean;
  children?: React.ReactNode;
};

const ELEMENT = 'div';

type Props<T extends React.ElementType> = COMBINE_ELEMENT_PROPS<T, BaseProps>;

function Menu<T extends React.ElementType = typeof ELEMENT>(
  {
    selected = false,
    disabled = false,
    children,
    className,
    ...props
  }: Props<T>,
  ref: React.Ref<any>,
) {
  return (
    <ELEMENT
      {...props}
      ref={ref}
      className={cx('menu', { selected }, { disabled }, className)}
    >
      {children}
    </ELEMENT>
  );
}

export type SideNavMenuProps = Props<typeof ELEMENT>;
export default React.forwardRef(Menu) as typeof Menu;
