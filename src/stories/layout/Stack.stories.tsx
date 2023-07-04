import type { StoryFn, Meta } from '@storybook/react';

import Stack from '@src/components/layout/Stack/Stack';
import type { StackProps } from '@src/components/layout/Stack/Stack';

const meta: Meta<typeof Stack> = {
  title: 'UI/Layout/Stack',
  component: Stack,
  parameters: {
    componentSubtitle: 'Stack',
  },
  argTypes: {},
};

const Template = (args: StackProps) => {
  const { children, ...arg } = args;

  return <Stack {...arg}>{children}</Stack>;
};

export const StackStory: StoryFn<StackProps> = Template.bind({});
StackStory.args = {
  children: 'Stack',
};

export default meta;
