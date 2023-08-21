import type { StoryFn, Meta } from '@storybook/react';

import Progressbar, {
  type ProgressbarProps,
} from '@src/components/Progressbar/Progressbar';

const meta: Meta<typeof Progressbar> = {
  title: 'UI/Components/Progressbar',
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
