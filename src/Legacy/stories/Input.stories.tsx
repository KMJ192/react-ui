import Input, { type InputProps } from '../components/Input/Input';
import type { Meta, StoryFn } from '@storybook/react';

import showIcon from '@icons/show_view_icon.svg';
import keyIcon from '@icons/key_icon.svg';

const meta: Meta<typeof Input> = {
  title: 'UI/Components/Input',
  component: Input,
  parameters: {
    componentSubtitle: 'Input',
  },
  argTypes: {},
};

const inputTemplate = (args: InputProps) => {
  return <Input {...args} />;
};

export const InputText: StoryFn<InputProps> = inputTemplate.bind({});
InputText.args = {
  type: 'text',
  error: false,
  placeholder: 'inputText',
  disabled: false,
  paddingTop: 10,
  paddingBottom: 10,
  paddingLeft: 10,
  paddingRight: 10,
};

export const InputPassword: StoryFn<InputProps> = inputTemplate.bind({});
InputPassword.args = {
  type: 'password',
  error: false,
  placeholder: 'input-password',
  leftIcon: (
    <img
      src={keyIcon}
      alt='key'
      style={{
        width: '24px',
        height: '24px',
      }}
    />
  ),
  rightIcon: (
    <img
      src={showIcon}
      alt='lock'
      style={{
        width: '24px',
        height: '24px',
      }}
    />
  ),
  disabled: false,
  paddingTop: 10,
  paddingBottom: 10,
  paddingLeft: 36,
  paddingRight: 36,
  leftIconPos: 10,
  rightIconPos: 10,
};

export default meta;
