import type { StoryFn, Meta } from '@storybook/react';

import Checkbox, { type CheckboxProps } from '../components/Checkbox/Checkbox';

const meta: Meta<typeof Checkbox> = {
  title: 'UI/Components/Checkbox',
  component: Checkbox,
  parameters: {
    componentSubtitle: 'Checkbox',
  },
  argTypes: {
    checked: {
      option: ['true', 'false'],
    },
    disabled: {
      option: ['true', 'false'],
    },
    multiple: {
      option: ['true', 'false'],
    },
  },
};

const Template = (args: CheckboxProps) => {
  const { children, ...arg } = args;

  return <Checkbox {...arg}>{children}</Checkbox>;
};

export const PrimaryCheckbox: StoryFn<CheckboxProps> = Template.bind({});
PrimaryCheckbox.args = {
  children: 'Checkbox',
  checked: true,
  disabled: false,
  multiple: false,
  size: 16,
  fontSize: 16,
};

export default meta;
