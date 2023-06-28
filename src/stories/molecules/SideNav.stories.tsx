import type { StoryFn, Meta } from '@storybook/react';

import SideNav from '@src/components/molecules/SideNav/SideNav';
import type { SideNavProps } from '@src/components/molecules/SideNav/SideNav';
import { useState } from 'react';

const meta: Meta<typeof SideNav> = {
  title: 'UI/Molecules/SideNav',
  component: SideNav,
  parameters: {
    componentSubtitle: 'SideNav',
  },
  argTypes: {},
};

export const LeftSideNav = () => {
  const [show, setShow] = useState<{ [key: string]: boolean }>({
    '0': false,
    '1': false,
    '2': false,
    '3': false,
    '4': false,
  });
  const onShow = (key: string) => {
    setShow({
      ...show,
      [key]: !show[key],
    });
  };

  return (
    <SideNav position='left' depthGap={24}>
      <SideNav.Menu
        onClick={() => {
          onShow('0');
        }}
      >
        menu1
      </SideNav.Menu>
      <SideNav.MenuGroup show={show['0']} depth={1}>
        <SideNav.Menu
          onClick={() => {
            onShow('1');
          }}
        >
          menu1-1
        </SideNav.Menu>
        <SideNav.MenuGroup show={show['1']} depth={2}>
          <SideNav.Menu>menu1-1-1</SideNav.Menu>
          <SideNav.Menu>menu1-1-2</SideNav.Menu>
          <SideNav.Menu>menu1-1-3</SideNav.Menu>
        </SideNav.MenuGroup>
        <SideNav.Menu>menu1-2</SideNav.Menu>
        <SideNav.Menu>menu1-3</SideNav.Menu>
      </SideNav.MenuGroup>
      <SideNav.Menu
        key='1'
        onClick={() => {
          onShow('2');
        }}
      >
        menu2
      </SideNav.Menu>
      <SideNav.MenuGroup show={show['2']} depth={1}>
        <SideNav.Menu>menu2-1</SideNav.Menu>
        <SideNav.Menu>menu2-2</SideNav.Menu>
        <SideNav.Menu>menu2-3</SideNav.Menu>
      </SideNav.MenuGroup>
      <SideNav.Menu
        key='2'
        onClick={() => {
          onShow('3');
        }}
      >
        menu3
      </SideNav.Menu>
      <SideNav.MenuGroup show={show['3']} depth={1}>
        <SideNav.Menu
          onClick={() => {
            onShow('4');
          }}
        >
          menu3-1
        </SideNav.Menu>
        <SideNav.MenuGroup show={show['4']} depth={2}>
          <SideNav.Menu>menu3-1-1</SideNav.Menu>
          <SideNav.Menu>menu3-1-2</SideNav.Menu>
          <SideNav.Menu>menu3-1-3</SideNav.Menu>
        </SideNav.MenuGroup>
        <SideNav.Menu>menu3-2</SideNav.Menu>
        <SideNav.Menu>menu3-3</SideNav.Menu>
      </SideNav.MenuGroup>
    </SideNav>
  );
};

export const RightSideNav = () => {
  return <SideNav position='right'></SideNav>;
};

export const SideNavTemplate = () => {
  return <SideNav.Template />;
};

export default meta;
