import type { StoryFn, Meta } from '@storybook/react';

import Stack from '@src/components/layout/Stack/Stack';
import type { StackProps } from '@src/components/layout/Stack/Stack';

const meta: Meta<typeof Stack> = {
  title: 'UI/Layout/Stack',
  component: Stack,
  parameters: {
    componentSubtitle: 'Stack',
  },
  argTypes: {
    direction: {
      options: ['column', 'row'],
      control: {
        type: 'radio',
      },
    },
  },
};

const Template = (args: StackProps) => {
  return (
    <Stack
      {...args}
      style={
        {
          '--layoutStackGap': '12px',
        } as any
      }
    >
      <div>stack1</div>
      <div>stack2</div>
      <div>stack3</div>
      <div>stack4</div>
    </Stack>
  );
};

export const StackStory: StoryFn<StackProps> = Template.bind({});
StackStory.args = {
  as: 'div',
  direction: 'column',
};

export default meta;
