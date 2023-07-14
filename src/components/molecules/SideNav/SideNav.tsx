import React from 'react';

import type { COMBINE_ELEMENT_PROPS } from '@src/types/types';

import SideNavProvider from './store/Provider';

import Menu from './Menu/Menu';
import MenuGroup from './MenuGroup/MenuGroup';

import classNames from 'classnames/bind';
import style from './style.module.scss';
import Flex from '@src/components/layout/Flex/Flex';
const cx = classNames.bind(style);

type BaseProps = {
  children?: React.ReactNode;
  depthGap?: number;
};

const ELEMENT = 'nav';

type Props<T extends React.ElementType> = COMBINE_ELEMENT_PROPS<T, BaseProps>;

function SN<T extends React.ElementType = typeof ELEMENT>(
  { children, depthGap = 0, className, ...props }: Props<T>,
  ref: React.Ref<any>,
) {
  return (
    <SideNavProvider
      value={{
        depthGap,
      }}
    >
      <Flex
        {...props}
        ref={ref}
        as={ELEMENT}
        className={cx('side-nav', className)}
      >
        {children}
      </Flex>
    </SideNavProvider>
  );
}

const SideNav = Object.assign(React.forwardRef(SN) as typeof SN, {
  Menu,
  MenuGroup,
});

export type SideNavProps = Props<typeof ELEMENT>;
export default SideNav;
