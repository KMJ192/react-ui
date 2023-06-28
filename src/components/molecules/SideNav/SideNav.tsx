import React from 'react';

import type { OVER_RIDABLE_PROPS } from '@src/types/types';

import SideNavProvider from './store/Provider';
import useSideNavState from './store/hooks/useSideNavState';

import Top from './Top/Top';
import Mid from './Mid/Mid';
import Bot from './Bot/Bot';
import Menu from './Menu/Menu';
import MenuGroup from './MenuGroup/MenuGroup';
import Template from './Template/Template';

import classNames from 'classnames/bind';
import style from './style.module.scss';
const cx = classNames.bind(style);

type BaseProps = {
  children?: React.ReactNode;
  position?: 'left' | 'right';
  selected?: string | number;
  depthGap?: number;
};

const ELEMENT = 'div';

type Props<T extends React.ElementType> = OVER_RIDABLE_PROPS<T, BaseProps>;

function SN<T extends React.ElementType = typeof ELEMENT>(
  {
    children,
    position = 'left',
    depthGap = 0,
    selected,
    className,
    ...props
  }: Props<T>,
  ref: React.Ref<any>,
) {
  return (
    <SideNavProvider
      value={{
        position: 'left',
      }}
    >
      <ELEMENT
        {...props}
        ref={ref}
        className={cx('side-nav', position, className)}
      >
        {children}
      </ELEMENT>
    </SideNavProvider>
  );
}

const SideNav = Object.assign(React.forwardRef(SN) as typeof SN, {
  Top,
  Mid,
  Bot,
  Menu,
  MenuGroup,
  Template,
});

export type SideNavProps = Props<typeof ELEMENT>;
export default SideNav;
