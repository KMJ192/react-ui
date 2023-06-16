import type { StoryFn, Meta } from '@storybook/react';

import Color from '@src/components/basic/Color/Color';
import { useState } from 'react';
import { Theme } from '@src/types/types';
import useValueUIState from '@src/store/hooks/useValueUIState';

const meta: Meta<typeof Color> = {
  title: 'UI/Atoms/Basic/Color',
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

export const ColorView = () => {
  const { theme } = useValueUIState();

  return <Color theme={theme} />;
};

export default meta;
