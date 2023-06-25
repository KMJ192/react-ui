import type { StoryFn, Meta } from '@storybook/react';

import Spinner, { SpinnerProps } from '@src/components/atoms/Spinner/Spinner';

const meta: Meta<typeof Spinner> = {
  title: 'UI/Atoms/Spinner',
  component: Spinner,
  parameters: {
    componentSubtitle: 'Spinner',
  },
  argTypes: {
    type: {
      control: {
        disable: true,
      },
    },
    size: {
      options: ['xs', 'sm', 'md', 'lg'],
      control: {
        type: 'select',
      },
    },
  },
};

const Template = (args: SpinnerProps) => {
  return <Spinner {...args} />;
};

export const SpinnerType1: StoryFn<SpinnerProps> = Template.bind({});
SpinnerType1.args = {
  type: 'type-1',
  size: 'md',
};

export const SpinnerType2: StoryFn<SpinnerProps> = Template.bind({});
SpinnerType2.args = {
  type: 'type-2',
  size: 'md',
};

export const SpinnerType3: StoryFn<SpinnerProps> = Template.bind({});
SpinnerType3.args = {
  type: 'type-3',
  size: 'md',
};

export default meta;
