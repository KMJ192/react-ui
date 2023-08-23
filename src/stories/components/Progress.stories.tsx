import type { StoryFn, Meta } from '@storybook/react';

import Progressbar, {
  type ProgressbarProps,
} from '@src/components/Progressbar/Progressbar';

import style from './Components.module.scss';

const meta: Meta<typeof Progressbar> = {
  title: 'UI/Components/Progressbar',
  component: Progressbar,
  parameters: {
    componentSubtitle: 'Progressbar',
  },
  argTypes: {},
};

const Template = (args: ProgressbarProps) => {
  return <Progressbar className={style.progress} {...args}></Progressbar>;
};

export const PrimaryProgressbar: StoryFn<ProgressbarProps> = Template.bind({});
PrimaryProgressbar.args = {
  percent: 70,
  isPending: true,
  height: 12,
};

export default meta;
