import Input from '@src/components/atoms/Input/Input';
import type { InputProps } from '@src/components/atoms/Input/Input';
import type { Meta, StoryFn } from '@storybook/react';

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
};

export const InputPassword: StoryFn<InputProps> = inputTemplate.bind({});
InputPassword.args = {
  type: 'password',
  size: 'md',
};

export default meta;
