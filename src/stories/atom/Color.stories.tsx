import type { StoryFn, Meta } from '@storybook/react';

import Color from '@src/components/basic/Color/Color';
import { useState } from 'react';
import { Theme } from '@src/types/types';

const meta: Meta<typeof Color> = {
  title: 'UI/Basic/Color',
  component: Color,
  parameters: {
    componentSubtitle: 'Color',
  },
  argTypes: {
    theme: {
      options: ['light', 'dark'],
      control: {
        type: 'select',
      },
    },
  },
};

export const ColorView = (args: { theme: Theme }) => {
  return <Color {...args} />;
};

export default meta;
