import { useState } from 'react';
import type { StoryFn, Meta } from '@storybook/react';

import RadioGroup, {
  type RadioGroupProps,
  type RadioGroupOptionKey,
} from '@src/components/RadioGroup/RadioGroup';
// import {
//   RadioGroup,
//   RadioGroupOptionKey,
//   type RadioGroupProps,
// } from '@upcast/react-ui';

const meta: Meta<typeof RadioGroup> = {
  title: 'UI/Components/RadioGroup',
  component: RadioGroup,
  parameters: {
    componentSubtitle: 'RadioGroup',
  },
  argTypes: {
    direction: {
      options: ['horizontal', 'vertical'],
      control: {
        type: 'radio',
      },
    },
    selected: {
      control: {
        disable: true,
      },
    },
  },
};

const Template = (args: RadioGroupProps) => {
  const { selected, ...arg } = args;
  const [s, setS] = useState(selected);

  const onSelect = (key: RadioGroupOptionKey, idx: number) => {
    setS(idx);
  };

  return <RadioGroup {...arg} selected={s} onSelect={onSelect}></RadioGroup>;
};

export const RadioGroupStory: StoryFn<RadioGroupProps> = Template.bind({});
RadioGroupStory.args = {
  direction: 'horizontal',
  selected: 0,
  options: [
    {
      key: 0,
      children: 'first',
      disabled: false,
    },
    {
      key: 1,
      children: 'second',
      disabled: false,
    },
    {
      key: 2,
      children: 'third',
      disabled: false,
    },
    {
      key: 3,
      children: 'disabled',
      disabled: true,
    },
  ],
};

export default meta;
