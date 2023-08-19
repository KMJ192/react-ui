import HamburgerMenu from '@src/components/HamburgerMenu/HamburgerMenu';
import type { HamburgerMenuProps } from '@src/components/HamburgerMenu/HamburgerMenu';
import { Meta, StoryFn } from '@storybook/react';

const meta: Meta<typeof HamburgerMenu> = {
  title: 'UI/Components/HamburgerMenu',
  component: HamburgerMenu,
  parameters: {
    componentSubtitle: 'HamburgerMenu',
  },
  argTypes: {
    type: {
      options: ['type1', 'type2', 'type3'],
      control: {
        type: 'select',
      },
    },
  },
};

const hamburgerMenu = (args: HamburgerMenuProps): JSX.Element => {
  return <HamburgerMenu {...args} />;
};

export const HamburgerMenuStory: StoryFn<HamburgerMenuProps> =
  hamburgerMenu.bind({});
HamburgerMenuStory.args = {
  active: false,
  type: 'type1',
  width: 24,
  height: 18,
  midBar: 8,
};

export default meta;
