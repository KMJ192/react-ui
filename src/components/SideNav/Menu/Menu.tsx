import React from 'react';

import Flex from '@src/layout/Flex/Flex';

import type { OVER_RIDABLE_PROPS } from '@src/types/types';

import classNames from 'classnames/bind';
import style from './style.module.scss';
const cx = classNames.bind(style);

type BaseProps = {
  selected?: boolean;
  disabled?: boolean;
  children?: React.ReactNode;
};

const DEFAULT_ELEMENT = 'div';

type Props<T extends React.ElementType> = OVER_RIDABLE_PROPS<T, BaseProps>;

function Menu<T extends React.ElementType = typeof DEFAULT_ELEMENT>(
  {
    as,
    selected = false,
    disabled = false,
    children,
    className,
    ...props
  }: Props<T>,
  ref: React.Ref<React.ElementRef<typeof DEFAULT_ELEMENT>>,
) {
  const ELEMENT = as || DEFAULT_ELEMENT;

  return (
    <Flex
      {...props}
      as={ELEMENT as any}
      ref={ref}
      className={cx('menu', { selected }, { disabled }, className)}
    >
      {children}
    </Flex>
  );
}

export type SideNavMenuProps = Props<typeof DEFAULT_ELEMENT>;
export default React.forwardRef(Menu) as typeof Menu;
