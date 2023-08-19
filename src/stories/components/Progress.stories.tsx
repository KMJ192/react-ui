import type { StoryFn, Meta } from '@storybook/react';

import ProgressBar from '@src/components/ProgressBar/ProgressBar';
import type { ProgressBarProps } from '@src/components/ProgressBar/ProgressBar';

const meta: Meta<typeof ProgressBar> = {
  title: 'UI/Components/ProgressBar',
  component: ProgressBar,
  parameters: {
    componentSubtitle: 'ProgressBar',
  },
  argTypes: {},
};

const Template = (args: ProgressBarProps) => {
  return <ProgressBar {...args}></ProgressBar>;
};

export const PrimaryProgressBar: StoryFn<ProgressBarProps> = Template.bind({});
PrimaryProgressBar.args = {
  percent: 70,
  isPending: true,
  width: '100%',
  height: 8,
};

export default meta;
