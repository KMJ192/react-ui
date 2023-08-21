import type { Meta, StoryFn } from '@storybook/react';

import Input, { type InputProps } from '@src/components/Input/Input';

import showIcon from '@icons/show_view_icon.svg';
import keyIcon from '@icons/key_icon.svg';

const meta: Meta<typeof Input> = {
  title: 'UI/Components/Input',
  component: Input,
  parameters: {
    componentSubtitle: 'Input',
  },
  argTypes: {
    size: {
      options: ['xs', 'sm', 'md', 'lg'],
      control: {
        type: 'select',
      },
    },
  },
};

const inputTemplate = (args: InputProps) => {
  return <Input {...args} />;
};

export const InputText: StoryFn<InputProps> = inputTemplate.bind({});
InputText.args = {
  type: 'text',
  size: 'md',
  error: false,
  placeholder: 'input-text',
  disabled: false,
};

export const InputPassword: StoryFn<InputProps> = inputTemplate.bind({});
InputPassword.args = {
  type: 'password',
  size: 'md',
  error: false,
  placeholder: 'input-password',
  leftIcon: <img src={keyIcon} alt='key' />,
  rightIcon: <img src={showIcon} alt='lock' />,
  disabled: false,
};

export default meta;
