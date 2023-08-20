import type { StoryFn, Meta } from '@storybook/react';

import Test from '@src/components/basic/Test/Test';
import type { TestProps } from '@src/components/basic/Test/Test';

const meta: Meta<typeof Test> = {
  title: 'UI/Atoms/Test',
  component: Test,
  parameters: {
    componentSubtitle: 'Test',
  },
  argTypes: {},
};

const Template = (args: TestProps) => {
  const { children, ...arg } = args;

  return <Test {...arg}>{children}</Test>;
};

export const TestStory: StoryFn<TestProps> = Template.bind({});
TestStory.args = {
  children: 'Test',
};

export default meta;
