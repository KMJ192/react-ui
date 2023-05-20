import { useState } from 'react';
import HamburgerMenu from './HamburgerMenu';
import type { HamburgerBaseProps } from './HamburgerMenu';

export default {
  title: 'UI/Atom/HamburgerMenu',
  component: HamburgerMenu,
  parameters: {
    componentSubtitle: 'HamburgerMenu',
  },
};

export const hamburgerMenu = (): JSX.Element => {
  const [active, setActive] = useState(false);

  const onClick = () => {
    setActive(!active);
  };

  return <HamburgerMenu onClick={onClick} active={active} type='type-1' />;
};
