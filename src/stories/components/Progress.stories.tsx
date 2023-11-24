import type { StoryFn, Meta } from '@storybook/react';

import ProgressBar, {
  type ProgressBarProps,
} from '@src/components/ProgressBar/ProgressBar';
// import { ProgressBar, type ProgressBarProps } from '@cdkit/react-ui';

import style from './Components.module.scss';

const meta: Meta<typeof ProgressBar> = {
  title: 'UI/Components/Progressbar',
  component: ProgressBar,
  parameters: {
    componentSubtitle: 'Progressbar',
  },
  argTypes: {},
};

const Template = (args: ProgressBarProps) => {
  return <ProgressBar className={style.progress} {...args}></ProgressBar>;
};

export const PrimaryProgressbar: StoryFn<ProgressBarProps> = Template.bind({});
PrimaryProgressbar.args = {
  percent: 70,
  pending: true,
};

export default meta;
