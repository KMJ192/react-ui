import type { StoryFn, Meta } from '@storybook/react';

import Switch from '@src/components/Switch/Switch';
import type { SwitchProps } from '@src/components/Switch/Switch';

const meta: Meta<typeof Switch> = {
  title: 'UI/Components/Switch',
  component: Switch,
  parameters: {
    componentSubtitle: 'Switch',
  },
  argTypes: {},
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
  width: 44,
  height: 24,
  bulletSize: 16,
  fontSize: 16,
};

export default meta;
