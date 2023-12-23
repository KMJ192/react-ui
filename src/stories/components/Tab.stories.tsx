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
  const [selected, setSelected] = useState(0);

  const onSelect = (e: React.MouseEvent<HTMLDivElement>) => {
    const { idx } = (e.target as HTMLDivElement).dataset;
    const i = Number(idx);
    if (!Number.isNaN(i)) {
      setSelected(i);
    }
  };

  return (
    <Tab {...args} selected={selected} onClick={onSelect}>
      <Tab.Mark></Tab.Mark>
      <Tab.Options>
        <Tab.Option data-idx='0'>first</Tab.Option>
        <Tab.Option data-idx='1'>second</Tab.Option>
        <Tab.Option data-idx='2'>third</Tab.Option>
        <Tab.Option data-idx='3'>last</Tab.Option>
      </Tab.Options>
    </Tab>
  );
};

export const TabStory: StoryFn<TabProps> = TabTemplate.bind({});
TabStory.args = {
  direction: 'horizontal',
};

export default meta;
