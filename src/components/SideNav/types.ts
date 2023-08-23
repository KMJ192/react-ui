import type { ReactNode } from 'react';

type SideNavKey = string | number;

type SideNavItem = {
  key: SideNavKey;
  contents: ReactNode;
  disabled?: boolean;
  children?: Array<SideNavItem>;
};

export type { SideNavItem, SideNavKey };
