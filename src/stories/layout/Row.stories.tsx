import type { StoryFn, Meta } from '@storybook/react';

import Row from '@src/components/layout/Row/Row';
import type { RowProps } from '@src/components/layout/Row/Row';

const meta: Meta<typeof Row> = {
  title: 'UI/Layout/Row',
  component: Row,
  parameters: {
    componentSubtitle: 'Row',
  },
  argTypes: {},
};

const Template = (args: RowProps) => {
  const { children, ...arg } = args;

  return <Row {...arg}>{children}</Row>;
};

export const RowStory: StoryFn<RowProps> = Template.bind({});
RowStory.args = {
  children: 'Row',
};

export default meta;
