import Input from '@src/components/atoms/Input/Input';
import type { InputProps } from '@src/components/atoms/Input/Input';
import type { Meta, StoryFn } from '@storybook/react';

import showIcon from '@icons/show_view_icon.svg';
import keyIcon from '@icons/key_icon.svg';

const meta: Meta<typeof Input> = {
  title: 'UI/Atoms/Input',
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
  leftIcon: <img src={keyIcon} alt='key' />,
  rightIcon: <img src={showIcon} alt='lock' />,
};

export const InputPassword: StoryFn<InputProps> = inputTemplate.bind({});
InputPassword.args = {
  type: 'password',
  size: 'md',
};

export default meta;
