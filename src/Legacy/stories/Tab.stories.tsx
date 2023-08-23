import { useState } from 'react';
import type { Meta, StoryFn } from '@storybook/react';

import Tab, { type TabProps } from '../components/Tab/Tab';

const meta: Meta<typeof Tab> = {
  title: 'UI/Components/Tab',
  component: Tab,
  parameters: {
    componentSubtitle: 'Tab',
  },
  argTypes: {
    direction: {
      options: ['vertical', 'horizontal'],
      control: {
        type: 'radio',
      },
    },
  },
};

const TabTemplate = (args: TabProps) => {
  const [selected, setSelected] = useState(args.selected);

  const onSelect = (idx: number) => {
    setSelected(idx);
  };

  return <Tab {...args} onSelect={onSelect} selected={selected} />;
};

export const HorizontalTab: StoryFn<TabProps> = TabTemplate.bind({});
HorizontalTab.args = {
  options: [
    {
      key: 0,
      contents: 'option1',
    },
    {
      key: 1,
      contents: 'option2',
    },
    {
      key: 2,
      contents: 'option3',
    },
  ],
  direction: 'horizontal',
  selected: 0,
};

export const VerticalTab: StoryFn<TabProps> = TabTemplate.bind({});
VerticalTab.args = {
  options: [
    {
      key: 0,
      contents: 'option1',
    },
    {
      key: 1,
      contents: 'option2',
      disabled: true,
    },
    {
      key: 2,
      contents: 'option3',
    },
  ],
  direction: 'vertical',
  selected: 0,
};

export default meta;
