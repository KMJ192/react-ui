import type { StoryFn, Meta } from '@storybook/react';

import Test, { type TestProps } from '@src/components/Test/Test';

const meta: Meta<typeof Test> = {
  title: 'UI/Components/Test',
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
