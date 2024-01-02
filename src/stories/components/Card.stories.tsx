import type { StoryFn, Meta } from '@storybook/react';

import Card, { type CardProps } from '@src/components/Card/Card';
import { display, flexDirection } from './common';

const meta: Meta<typeof Card> = {
  title: 'UI/Components/Card',
  component: Card,
  parameters: {
    componentSubtitle: 'Card',
  },
  argTypes: {
    display,
    flexDirection,
  },
};

const Template = (args: CardProps) => {
  const { children, ...arg } = args;

  return <Card {...arg}>{children}</Card>;
};

export const CardStory: StoryFn<CardProps> = Template.bind({});
CardStory.args = {
  children: 'Card',
  display: 'flex',
  centerVertical: false,
  centerHorizontal: false,
};

export default meta;
