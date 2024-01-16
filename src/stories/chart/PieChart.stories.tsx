import type { StoryFn, Meta } from '@storybook/react';

import PieChart, { type PieChartProps } from '@src/chart/PieChart/PieChart';
import { useState } from 'react';
import { deepClone } from '@src/utils/utils';

const meta: Meta<typeof PieChart> = {
  title: 'Chart/PieChart',
  component: PieChart,
  parameters: {
    componentSubtitle: 'PieChart',
  },
  argTypes: {},
};

const Template = (args: PieChartProps) => {
  const [state, setState] = useState(args.data);

  return (
    <div
      style={{
        // width: '70%',
        width: '100%',
        height: 'calc(100% - 60px)',
        // width: '200px',
        // height: '300px',
      }}
    >
      <PieChart
        {...args}
        data={state}
        style={{
          border: '1px solid black',
          // borderRadius: '8px',
        }}
      ></PieChart>
      <button
        onClick={() => {
          setState((data) => {
            const newData = deepClone(data);
            newData.total += 10;
            newData.value[0] += 10;
            return newData;
          });
        }}
      >
        test
      </button>
    </div>
  );
};

export const PieChartStory: StoryFn<PieChartProps> = Template.bind({});
PieChartStory.args = {
  data: {
    total: 230,
    name: ['first', 'second', 'third', 'fourth', 'last', 'test'],
    value: [30, 30, 20, 32, 48, 70],
    color: ['green', 'red', 'blue', 'magenta', 'skyblue', '#dac'],
  },
};

export default meta;
