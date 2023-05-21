import { useState } from 'react';
import HamburgerMenu, {
  HamburgerProps,
} from '@src/components/atoms/HamburgerMenu/HamburgerMenu';
import { StoryFn } from '@storybook/react';

export default {
  title: 'UI/Atoms/HamburgerMenu',
  component: HamburgerMenu,
  parameters: {
    componentSubtitle: 'HamburgerMenu',
  },
  argTypes: {
    type: {
      options: ['type-1', 'type-2', 'type-3', 'type-4'],
      control: {
        type: 'select',
      },
    },
  },
};

const hamburgerMenu = (args: HamburgerProps): JSX.Element => {
  return <HamburgerMenu {...args} />;
};

export const HamburgerMenuStory: StoryFn<HamburgerProps> = hamburgerMenu.bind(
  {},
);
HamburgerMenuStory.args = {
  active: false,
  type: 'type-1',
};
