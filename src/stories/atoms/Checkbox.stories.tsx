import type { StoryFn, Meta } from '@storybook/react';

import Checkbox from '@src/components/atoms/Checkbox/Checkbox';
import type { CheckboxProps } from '@src/components/atoms/Checkbox/Checkbox';

const meta: Meta<typeof Checkbox> = {
  title: 'UI/Atoms/Checkbox',
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

  return <Checkbox {...arg}></Checkbox>;
};

export const PrimaryCheckbox: StoryFn<CheckboxProps> = Template.bind({});
PrimaryCheckbox.args = {
  children: 'Checkbox',
  checked: true,
  disabled: false,
  multiple: false,
};

export default meta;
