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
  return (
    <Radio {...args} className={style.radio}>
      <Radio.Mark></Radio.Mark>
    </Radio>
  );
};

export const PrimaryRadio: StoryFn<RadioProps> = Template.bind({});
PrimaryRadio.args = {
  checked: false,
  disabled: false,
};

export default meta;
