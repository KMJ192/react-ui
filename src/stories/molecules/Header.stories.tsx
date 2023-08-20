import type { StoryFn, Meta } from '@storybook/react';

import Header from '@src/Legacy/molecules/Header/Header';
import type { HeaderProps } from '@src/Legacy/molecules/Header/Header';

const meta: Meta<typeof Header> = {
  title: 'UI/Molecules/Header',
  component: Header,
  parameters: {
    componentSubtitle: 'Header',
  },
  argTypes: {},
};

const Template = (args: HeaderProps) => {
  const { children, ...arg } = args;

  return (
    <Header {...arg}>
      <Header.Left>Left</Header.Left>
      <Header.Mid>Mid</Header.Mid>
      <Header.Right>RIght</Header.Right>
    </Header>
  );
};

export const PrimaryHeader: StoryFn<HeaderProps> = Template.bind({});
PrimaryHeader.args = {};

export default meta;
