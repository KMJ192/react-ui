import type { StoryFn, Meta } from '@storybook/react';

import Footer from '@src/components/molecules/Footer/Footer';
import type { FooterProps } from '@src/components/molecules/Footer/Footer';

const meta: Meta<typeof Footer> = {
  title: 'UI/Molecules/Footer',
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
