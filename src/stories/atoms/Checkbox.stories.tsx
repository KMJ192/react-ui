import type { StoryFn, Meta } from '@storybook/react';

import Checkbox from '@src/components/atoms/Checkbox/Checkbox';
import type { CheckboxProps } from '@src/components/atoms/Checkbox/Checkbox';

const meta: Meta<typeof Checkbox> = {
  title: 'UI/Atoms/Checkbox',
  component: Checkbox,
  parameters: {
    componentSubtitle: 'Checkbox',
  },
  argTypes: {},
};

const Template = (args: CheckboxProps) => {
  const { children, ...arg } = args;

  return <Checkbox {...arg}></Checkbox>;
};

export const PrimaryCheckbox: StoryFn<CheckboxProps> = Template.bind({});
PrimaryCheckbox.args = {
  children: 'Checkbox',
  checked: false,
  disabled: false,
};

export default meta;
