import type { StoryFn, Meta } from '@storybook/react';

// import Checkbox, {
//   type CheckboxProps,
// } from '@src/components/Checkbox/Checkbox';
import { Checkbox, type CheckboxProps } from '@upcast/react-ui';

import style from './Components.module.scss';

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

  return (
    <Checkbox className={style.checkbox} {...arg}>
      {children}
    </Checkbox>
  );
};

export const PrimaryCheckbox: StoryFn<CheckboxProps> = Template.bind({});
PrimaryCheckbox.args = {
  children: 'Checkbox',
  checked: true,
  disabled: false,
  multiple: false,
};

export default meta;
