import type { StoryFn, Meta } from '@storybook/react';

import Button, { ButtonProps } from '@src/components/atoms/Button/Button';

import classNames from 'classnames/bind';
import style from './Test.module.scss';
const cx = classNames.bind(style);

const meta: Meta<typeof Button> = {
  title: 'UI/Button',
  component: Button,
  parameters: {
    componentSubtitle: 'Button',
  },
};

const Template = (args: ButtonProps) => {
  return <Button>{args.children}</Button>;
};

export const Primary: StoryFn<ButtonProps> = Template.bind({});
Primary.args = {
  children: 'Primary',
};

export const Secondary: StoryFn<ButtonProps> = Template.bind({});
Secondary.args = {
  children: 'Secondary',
};

export default meta;
