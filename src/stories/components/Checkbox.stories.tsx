import type { StoryFn, Meta } from '@storybook/react';

import Checkbox, {
  type CheckboxProps,
} from '@src/components/Checkbox/Checkbox';
// import { Checkbox, type CheckboxProps } from '@cdkit/react-ui';

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
  return (
    <Checkbox className={style.checkbox} {...args}>
      <Checkbox.MarkField>
        <Checkbox.Mark></Checkbox.Mark>
      </Checkbox.MarkField>
    </Checkbox>
  );
};

export const PrimaryCheckbox: StoryFn<CheckboxProps> = Template.bind({});
PrimaryCheckbox.args = {
  checked: true,
  disabled: false,
  multiple: false,
};

export default meta;
