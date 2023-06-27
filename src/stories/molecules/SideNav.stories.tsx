import type { StoryFn, Meta } from '@storybook/react';

import SideNav from '@src/components/molecules/SideNav/SideNav';
import type { SideNavProps } from '@src/components/molecules/SideNav/SideNav';

const meta: Meta<typeof SideNav> = {
  title: 'UI/Molecules/SideNav',
  component: SideNav,
  parameters: {
    componentSubtitle: 'SideNav',
  },
  argTypes: {},
};

const Template = (args: SideNavProps) => {
  return (
    <SideNav {...args}>
      <SideNav.Top>Top</SideNav.Top>
      <SideNav.Mid>
        <SideNav.Menu>menu1</SideNav.Menu>
        <SideNav.MenuGroup>
          <SideNav.Menu>menu1-1</SideNav.Menu>
          <SideNav.MenuGroup>
            <SideNav.Menu>menu1-1-1</SideNav.Menu>
            <SideNav.Menu>menu1-1-2</SideNav.Menu>
            <SideNav.Menu>menu1-1-3</SideNav.Menu>
          </SideNav.MenuGroup>
          <SideNav.Menu>menu1-2</SideNav.Menu>
          <SideNav.Menu>menu1-3</SideNav.Menu>
        </SideNav.MenuGroup>
        <SideNav.Menu>menu2</SideNav.Menu>
        <SideNav.MenuGroup>
          <SideNav.Menu>menu2-1</SideNav.Menu>
          <SideNav.Menu>menu2-2</SideNav.Menu>
          <SideNav.Menu>menu2-3</SideNav.Menu>
        </SideNav.MenuGroup>
        <SideNav.Menu>menu3</SideNav.Menu>
        <SideNav.MenuGroup>
          <SideNav.Menu>menu3-1</SideNav.Menu>
          <SideNav.MenuGroup>
            <SideNav.Menu>menu3-1-1</SideNav.Menu>
            <SideNav.Menu>menu3-1-2</SideNav.Menu>
            <SideNav.Menu>menu3-1-3</SideNav.Menu>
          </SideNav.MenuGroup>
          <SideNav.Menu>menu3-2</SideNav.Menu>
          <SideNav.Menu>menu3-3</SideNav.Menu>
        </SideNav.MenuGroup>
      </SideNav.Mid>
      <SideNav.Bot>Bot</SideNav.Bot>
    </SideNav>
  );
};

export const SideNavStory: StoryFn<SideNavProps> = Template.bind({});
SideNavStory.args = {};

export default meta;
