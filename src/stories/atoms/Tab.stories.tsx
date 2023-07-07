import { useState } from 'react';

import Tab, { TabProps } from '@src/components/atoms/Tab/Tab';
import type { StoryFn } from '@storybook/react';

export default {
  title: 'UI/Atoms/Tab',
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
