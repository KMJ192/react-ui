import type { StoryFn, Meta } from '@storybook/react';

import Switch, { type SwitchProps } from '@src/components/Switch/Switch';

const meta: Meta<typeof Switch> = {
  title: 'UI/Components/Switch',
  component: Switch,
  parameters: {
    componentSubtitle: 'Switch',
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

const Template = (args: SwitchProps) => {
  const { children, ...arg } = args;

  return <Switch {...arg}>{children}</Switch>;
};

export const PrimarySwitch: StoryFn<SwitchProps> = Template.bind({});
PrimarySwitch.args = {
  children: 'Switch',
  checked: false,
  disabled: false,
  size: 'md',
};

export default meta;
