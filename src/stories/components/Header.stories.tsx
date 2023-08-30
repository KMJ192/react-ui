import type { StoryFn, Meta } from '@storybook/react';

import Header, { type HeaderProps } from '@src/components/Header/Header';

const meta: Meta<typeof Header> = {
  title: 'UI/Components/Header',
  component: Header,
  parameters: {
    componentSubtitle: 'Header',
  },
  argTypes: {},
};

const Template = (args: HeaderProps) => {
  const { children, ...arg } = args;

  return <Header {...arg}>{children}</Header>;
};

export const PrimaryHeader: StoryFn<HeaderProps> = Template.bind({});
PrimaryHeader.args = {};

export default meta;
