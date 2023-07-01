import { ReactNode } from 'react';

type NavKey = string | number;

type NavItem = {
  key: NavKey;
  contents: ReactNode;
  disabled?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  children?: Array<NavItem>;
};

export type { NavItem, NavKey };
