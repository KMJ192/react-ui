import { Meta, StoryFn } from '@storybook/react';

import HamburgerMenu, {
  type HamburgerMenuProps,
} from '@src/components/HamburgerMenu/HamburgerMenu';

const meta: Meta<typeof HamburgerMenu> = {
  title: 'UI/Components/HamburgerMenu',
  component: HamburgerMenu,
  parameters: {
    componentSubtitle: 'HamburgerMenu',
  },
  argTypes: {
    type: {
      options: ['type-1', 'type-2', 'type-3'],
      control: {
        type: 'select',
      },
    },
    size: {
      options: ['xs', 'sm', 'md', 'lg'],
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
  type: 'type-1',
  size: 'md',
};

export default meta;
