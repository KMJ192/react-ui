import type { StoryFn, Meta } from '@storybook/react';

import Float from '@src/components/layout/Float/Float';
import type { FloatProps } from '@src/components/layout/Float/Float';

const meta: Meta<typeof Float> = {
  title: 'UI/Layout/Float',
  component: Float,
  parameters: {
    componentSubtitle: 'Float',
  },
  argTypes: {
    startDirection: {
      options: ['lt', 'rb'],
      control: {
        type: 'radio',
      },
    },
  },
};

const Template = (args: FloatProps) => {
  const { children, ...arg } = args;

  return <Float {...arg}>{children}</Float>;
};

export const FloatStory: StoryFn<FloatProps> = Template.bind({});
FloatStory.args = {
  children: 'Float',
  as: 'div',
  startDirection: 'lt',
  left: 0,
  top: 0,
  right: 0,
  bottom: 0,
};

export default meta;
