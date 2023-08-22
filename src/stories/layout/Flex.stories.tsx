import type { StoryFn, Meta } from '@storybook/react';

import Flex from '@src/layout/Flex/Flex';
import type { FlexProps } from '@src/layout/Flex/Flex';

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
  as: 'div',
};

export default meta;
