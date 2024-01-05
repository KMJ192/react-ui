import type { StoryFn, Meta } from '@storybook/react';

import DonutChart, {
  type DonutChartProps,
} from '@src/chart/DonutChart/DonutChart';

const meta: Meta<typeof DonutChart> = {
  title: 'Chart/DonutChart',
  component: DonutChart,
  parameters: {
    componentSubtitle: 'DonutChart',
  },
  argTypes: {},
};

const Template = (args: DonutChartProps) => {
  return (
    <div
      style={{
        width: 'calc(100% - 80px)',
        height: 'calc(100% - 60px)',
      }}
    >
      <DonutChart {...args}></DonutChart>
    </div>
  );
};

export const DonutChartStory: StoryFn<DonutChartProps> = Template.bind({});
DonutChartStory.args = {};

export default meta;
