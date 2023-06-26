import type { StoryFn, Meta } from '@storybook/react';

import Progressbar from '@src/components/atoms/Progressbar/Progressbar';
import type { ProgressbarProps } from '@src/components/atoms/Progressbar/Progressbar';

const meta: Meta<typeof Progressbar> = {
  title: 'UI/Atoms/Progressbar',
  component: Progressbar,
  parameters: {
    componentSubtitle: 'Progressbar',
  },
  argTypes: {},
};

const Template = (args: ProgressbarProps) => {
  return <Progressbar {...args}></Progressbar>;
};

export const PrimaryProgressbar: StoryFn<ProgressbarProps> = Template.bind({});
PrimaryProgressbar.args = {
  percent: 70,
  isPending: true,
};

export default meta;
