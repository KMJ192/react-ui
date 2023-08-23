import type { StoryFn, Meta } from '@storybook/react';

import Footer, { type FooterProps } from '@src/components/Footer/Footer';

const meta: Meta<typeof Footer> = {
  title: 'UI/Components/Footer',
  component: Footer,
  parameters: {
    componentSubtitle: 'Footer',
  },
  argTypes: {},
};

const Template = (args: FooterProps) => {
  return (
    <Footer {...args}>
      <Footer.Left>Left</Footer.Left>
      <Footer.Mid>Mid</Footer.Mid>
      <Footer.Right>Right</Footer.Right>
    </Footer>
  );
};

export const PrimaryFooter: StoryFn<FooterProps> = Template.bind({});
PrimaryFooter.args = {};

export default meta;
