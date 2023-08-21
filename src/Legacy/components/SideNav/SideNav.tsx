import React from 'react';
import Styled from './styled';

import type { OVER_RIDABLE_PROPS } from '@src/types/types';
import SideNavProvider from './store/Provider';
import Menu from './Menu/Menu';
import MenuGroup from './MenuGroup/MenuGroup';

type BaseProps = {
  children?: React.ReactNode;
  depthGap?: number;
};

type Props<T extends React.ElementType> = OVER_RIDABLE_PROPS<T, BaseProps>;

const DEFAULT_ELEMENT = 'nav';

function SN<T extends React.ElementType = typeof DEFAULT_ELEMENT>(
  { as, children, depthGap = 0, className, ...props }: Props<T>,
  ref: React.Ref<any>,
) {
  const ELEMENT = as || DEFAULT_ELEMENT;

  return (
    <SideNavProvider
      value={{
        depthGap,
      }}
    >
      <Styled.Container {...props} as={ELEMENT} ref={ref} className={className}>
        {children}
      </Styled.Container>
    </SideNavProvider>
  );
}

const SideNav = Object.assign(React.forwardRef(SN) as typeof SN, {
  Menu,
  MenuGroup,
});

type SideNavProps = Props<typeof DEFAULT_ELEMENT>;
export type { SideNavProps, BaseProps as SideNavBaseProps };
export default SideNav;
