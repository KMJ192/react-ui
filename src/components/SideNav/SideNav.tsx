import React from 'react';

import type { OVER_RIDABLE_PROPS } from '@src/types/types';

import SideNavProvider from './store/Provider';

import Menu from './Menu/Menu';
import MenuGroup from './MenuGroup/MenuGroup';

import classNames from 'classnames/bind';
import style from './style.module.scss';
const cx = classNames.bind(style);

type BaseProps = {
  children?: React.ReactNode;
  depthGap?: number;
};

const DEFAULT_ELEMENT = 'nav';

type Props<T extends React.ElementType> = OVER_RIDABLE_PROPS<T, BaseProps>;

function SN<T extends React.ElementType = typeof DEFAULT_ELEMENT>(
  { children, depthGap = 0, className, ...props }: Props<T>,
  ref: React.Ref<any>,
) {
  return (
    <SideNavProvider
      value={{
        depthGap,
      }}
    >
      <nav {...props} ref={ref} className={cx('side-nav', className)}>
        <DEFAULT_ELEMENT>{children}</DEFAULT_ELEMENT>
      </nav>
    </SideNavProvider>
  );
}

const SideNav = Object.assign(React.forwardRef(SN) as typeof SN, {
  Menu,
  MenuGroup,
});

export type SideNavProps = Props<typeof DEFAULT_ELEMENT>;
export default SideNav;
