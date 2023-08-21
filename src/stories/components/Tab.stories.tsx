import { useState } from 'react';
import type { Meta, StoryFn } from '@storybook/react';

import Tab, { type TabProps } from '@src/components/Tab/Tab';

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
  const [select, setSelect] = useState(0);

  const onSelect = (idx: number) => {
    setSelect(idx);
  };

  return <Tab {...args} onSelect={onSelect} selected={select} />;
};

export const HorizontalTab: StoryFn<TabProps> = TabTemplate.bind({});
HorizontalTab.args = {
  options: [
    {
      contents: 'option1',
    },
    {
      contents: 'option2',
    },
    {
      contents: 'option3',
    },
  ],
  direction: 'horizontal',
};

export const VerticalTab: StoryFn<TabProps> = TabTemplate.bind({});
VerticalTab.args = {
  options: [
    {
      contents: 'option1',
    },
    {
      contents: 'option2',
    },
    {
      contents: 'option3',
    },
  ],
  direction: 'vertical',
};

export default meta;
