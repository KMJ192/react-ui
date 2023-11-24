import type { StoryFn, Meta } from '@storybook/react';

import Radio, { type RadioProps } from '@src/components/Radio/Radio';
// import { Radio, type RadioProps } from '@cdkit/react-ui';

import style from './Components.module.scss';

const meta: Meta<typeof Radio> = {
  title: 'UI/Components/Radio',
  component: Radio,
  parameters: {
    componentSubtitle: 'Radio',
  },
  argTypes: {
    checked: {
      option: ['true', 'false'],
    },
    disabled: {
      option: ['true', 'false'],
    },
  },
};

const Template = (args: RadioProps) => {
  const { children, ...arg } = args;

  return (
    <Radio {...arg} className={style.radio}>
      {children}
    </Radio>
  );
};

export const PrimaryRadio: StoryFn<RadioProps> = Template.bind({});
PrimaryRadio.args = {
  children: 'Radio',
  checked: false,
  disabled: false,
};

export default meta;
