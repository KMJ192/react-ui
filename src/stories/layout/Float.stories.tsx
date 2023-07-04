import type { StoryFn, Meta } from '@storybook/react';

import Float from '@src/components/layout/Float/Float';
import type { FloatProps } from '@src/components/layout/Float/Float';

const meta: Meta<typeof Float> = {
  title: 'UI/Layout/Float',
  component: Float,
  parameters: {
    componentSubtitle: 'Float',
  },
  argTypes: {},
};

const Template = (args: FloatProps) => {
  const { children, ...arg } = args;

  return <Float {...arg}>{children}</Float>;
};

export const FloatStory: StoryFn<FloatProps> = Template.bind({});
FloatStory.args = {
  children: 'Float',
};

export default meta;
