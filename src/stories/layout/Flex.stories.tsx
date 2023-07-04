import type { StoryFn, Meta } from '@storybook/react';

import Flex from '@src/components/layout/Flex/Flex';
import type { FlexProps } from '@src/components/layout/Flex/Flex';

const meta: Meta<typeof Flex> = {
  title: 'UI/Layout/Flex',
  component: Flex,
  parameters: {
    componentSubtitle: 'Flex',
  },
  argTypes: {},
};

const Template = (args: FlexProps) => {
  const { children, ...arg } = args;

  return <Flex {...arg}>{children}</Flex>;
};

export const FlexStory: StoryFn<FlexProps> = Template.bind({});
FlexStory.args = {
  children: 'Flex',
};

export default meta;
