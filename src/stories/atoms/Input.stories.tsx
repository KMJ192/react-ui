import Input from '@src/components/atoms/Input/Input';
import type { Meta, StoryFn } from '@storybook/react';

const meta: Meta<typeof Input> = {
  title: 'UI/Atoms/Input',
  component: Input,
  parameters: {
    componentSubtitle: 'Input',
  },
  argTypes: {},
};

const inputTemplate = () => {
  return <Input />;
};

export const InputText: StoryFn = inputTemplate.bind({});
InputText.args = {};

export const InputPassword: StoryFn = inputTemplate.bind({});
InputPassword.args = {};

export default meta;
