import type { StoryFn, Meta } from '@storybook/react';

import Card, { type CardProps } from '@src/components/Card/Card';

const meta: Meta<typeof Card> = {
  title: 'UI/Components/Card',
  component: Card,
  parameters: {
    componentSubtitle: 'Card',
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

const Template = (args: CardProps) => {
  const { children, ...arg } = args;

  return <Card {...arg}>{children}</Card>;
};

export const CardStory: StoryFn<CardProps> = Template.bind({});
CardStory.args = {
  children: 'Card',
};

export default meta;
