import { useState } from 'react';
import HamburgerMenu from '@src/components/atoms/HamburgerMenu/HamburgerMenu';

export default {
  title: 'UI/Atoms/HamburgerMenu',
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
