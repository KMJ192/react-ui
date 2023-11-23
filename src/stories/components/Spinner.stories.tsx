import type { StoryFn, Meta } from '@storybook/react';

import Spinner, { type SpinnerProps } from '@src/components/Spinner/Spinner';
// import { Spinner, type SpinnerProps } from '@upcast/react-ui';

import style from './Components.module.scss';

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
  return <Spinner {...args} className={style.spinner} />;
};

export const SpinnerType1: StoryFn<SpinnerProps> = Template.bind({});
SpinnerType1.args = {
  type: 'type-1',
};

export const SpinnerType2: StoryFn<SpinnerProps> = Template.bind({});
SpinnerType2.args = {
  type: 'type-2',
};

export default meta;
