import type { Meta } from '@storybook/react';

import Color from '@src/basic/Color/Color';
import useValueUIState from '@src/store/hooks/useValueUIState';

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

export const ColorView = () => {
  const { theme } = useValueUIState();

  return <Color theme={theme} />;
};

export default meta;
