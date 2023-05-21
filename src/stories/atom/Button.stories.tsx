import type { StoryFn, Meta } from '@storybook/react';

import Button, { ButtonProps } from '@src/components/atoms/Button/Button';

import classNames from 'classnames/bind';
import style from './Test.module.scss';
const cx = classNames.bind(style);

const meta: Meta<typeof Button> = {
  title: 'UI/Atoms/Button',
  component: Button,
  parameters: {
    componentSubtitle: 'Button',
  },
  argTypes: {
    variant: {
      options: ['primary', 'secondary'],
      control: {
        type: 'select',
      },
    },
  },
};

const Template = (args: ButtonProps) => {
  const { children, ...arg } = args;

  return <Button {...arg}>{children}</Button>;
};

export const Primary: StoryFn<ButtonProps> = Template.bind({});
Primary.args = {
  children: 'Primary',
  variant: 'primary',
};

export const Secondary: StoryFn<ButtonProps> = Template.bind({});
Secondary.args = {
  children: 'Secondary',
  variant: 'secondary',
};

export default meta;
