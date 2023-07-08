type SideNavKey = string | number;

type SideNavItem = {
  key: SideNavKey;
  contents: string;
  disabled?: boolean;
  children?: Array<SideNavItem>;
};

export type { SideNavItem, SideNavKey };
