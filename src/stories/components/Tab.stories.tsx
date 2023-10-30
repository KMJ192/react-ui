import { useState } from 'react';
import type { Meta, StoryFn } from '@storybook/react';

import Tab, { type TabProps } from '@src/components/Tab/Tab';
import type { TabOptionKey } from '@src/components/Tab/types';
// import { Tab, type TabProps, type TabOptionKey } from '@upcast/react-ui';

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
  const [select, setSelect] = useState(-1);

  const onSelect = (_: TabOptionKey, idx: number) => {
    setSelect(idx);
  };

  return <Tab {...args} onSelect={onSelect} selected={select} />;
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
    },
    {
      key: 2,
      contents: 'option3',
    },
  ],
  direction: 'vertical',
};

export default meta;
