import { ReactNode } from 'react';

type NavItem = {
  key: string | number;
  contents: ReactNode;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  children: Array<NavItem>;
};

export type { NavItem };
