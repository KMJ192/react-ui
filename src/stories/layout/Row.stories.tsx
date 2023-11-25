import type { StoryFn, Meta } from '@storybook/react';

import Row from '@src/layout/Row/Row';
import type { RowProps } from '@src/layout/Row/Row';

const meta: Meta<typeof Row> = {
  title: 'UI/Layout/Row',
  component: Row,
  parameters: {
    componentSubtitle: 'Row',
  },
  argTypes: {
    display: {
      options: ['flex', 'grid'],
      control: {
        type: 'radio',
      },
    },
    flexDirection: {
      options: ['column', 'row', 'column-reverse', 'row-reverse'],
      control: {
        type: 'radio',
      },
    },
  },
};

const Template = (args: RowProps) => {
  const { children, ...arg } = args;

  return <Row {...arg}>{children}</Row>;
};

export const RowStory: StoryFn<RowProps> = Template.bind({});
RowStory.args = {
  children: 'Row',
  as: 'div',
};

export default meta;
