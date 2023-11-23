import type { Meta, StoryFn } from '@storybook/react';

import Input, { type InputProps } from '@src/components/Input/Input';
// import { Input, type InputProps } from '@upcast/react-ui';

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
};

export const InputPassword: StoryFn<InputProps> = inputTemplate.bind({});
InputPassword.args = {
  type: 'password',
  error: false,
  placeholder: 'input-password',
  disabled: false,
};

export default meta;
