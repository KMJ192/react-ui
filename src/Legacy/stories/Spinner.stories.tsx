import type { StoryFn, Meta } from '@storybook/react';

import Spinner, { type SpinnerProps } from '../components/Spinner/Spinner';

const meta: Meta<typeof Spinner> = {
  title: 'UI/Components/Spinner',
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
  },
};

const Template = (args: SpinnerProps) => {
  return <Spinner {...args} />;
};

export const SpinnerType1: StoryFn<SpinnerProps> = Template.bind({});
SpinnerType1.args = {
  type: 'type-1',
  size: 24,
};

export const SpinnerType2: StoryFn<SpinnerProps> = Template.bind({});
SpinnerType2.args = {
  type: 'type-2',
  size: 24,
};

export const SpinnerType3: StoryFn<SpinnerProps> = Template.bind({});
SpinnerType3.args = {
  type: 'type-3',
  size: 24,
};

export default meta;
