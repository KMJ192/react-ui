import type { StoryFn, Meta } from '@storybook/react';

// import Switch, { type SwitchProps } from '@src/components/Switch/Switch';
import { Switch, type SwitchProps } from '@upcast/react-ui';

import style from './Components.module.scss';

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

  return (
    <Switch {...arg} className={style.switch}>
      {children}
    </Switch>
  );
};

export const PrimarySwitch: StoryFn<SwitchProps> = Template.bind({});
PrimarySwitch.args = {
  children: 'Switch',
  checked: false,
  disabled: false,
};

export default meta;
