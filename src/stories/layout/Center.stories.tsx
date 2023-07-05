import type { StoryFn, Meta } from '@storybook/react';

import Center from '@src/components/layout/Center/Center';
import type { CenterProps } from '@src/components/layout/Center/Center';

const meta: Meta<typeof Center> = {
  title: 'UI/Layout/Center',
  component: Center,
  parameters: {
    componentSubtitle: 'Center',
  },
  argTypes: {},
};

const Template = (args: CenterProps) => {
  const { children, ...arg } = args;

  return <Center {...arg}>{children}</Center>;
};

export const CenterStory: StoryFn<CenterProps> = Template.bind({});
CenterStory.args = {
  children: 'Center',
  as: 'div',
  vertical: true,
  horizontal: true,
};

export default meta;
