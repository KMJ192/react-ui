import { ReactNode } from 'react';

type SideNavItem = {
  key: string | number;
  contents: ReactNode;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  children: Array<SideNavItem>;
};

export type { SideNavItem };
