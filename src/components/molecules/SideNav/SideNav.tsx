import React from 'react';

import type { OVER_RIDABLE_PROPS } from '@src/types/types';

import SideNavProvider from './store/Provider';

import Top from './Top/Top';
import Mid from './Mid/Mid';
import Bot from './Bot/Bot';
import Menu from './Menu/Menu';

import classNames from 'classnames/bind';
import style from './style.module.scss';
import MenuGroup from './MenuGroup/MenuGroup';
const cx = classNames.bind(style);

type BaseProps = {
  children?: React.ReactNode;
};

const ELEMENT = 'div';

type Props<T extends React.ElementType> = OVER_RIDABLE_PROPS<T, BaseProps>;

function SN<T extends React.ElementType = typeof ELEMENT>(
  { children, className, ...props }: Props<T>,
  ref: React.Ref<any>,
) {
  return (
    <SideNavProvider value={{}}>
      <ELEMENT {...props} ref={ref} className={cx(className)}>
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
});

export type SideNavProps = Props<typeof ELEMENT>;
export default SideNav;
