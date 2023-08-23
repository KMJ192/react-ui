import type { StoryFn, Meta } from '@storybook/react';

import Card, { type CardProps } from '../components/Card/Card';

const meta: Meta<typeof Card> = {
  title: 'UI/Legacy/Card',
  component: Card,
  parameters: {
    componentSubtitle: 'Card',
  },
  argTypes: {},
};

const Template = (args: CardProps) => {
  const { children, ...arg } = args;

  return <Card {...arg}>{children}</Card>;
};

export const CardStory: StoryFn<CardProps> = Template.bind({});
CardStory.args = {
  children: 'Card',
  width: 200,
  height: 200,
};

export default meta;
