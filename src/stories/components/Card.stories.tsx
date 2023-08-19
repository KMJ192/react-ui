import type { StoryFn, Meta } from '@storybook/react';

import Card from '@src/components/Card/Card';
import type { CardProps } from '@src/components/Card/Card';

const meta: Meta<typeof Card> = {
  title: 'UI/Components/Card',
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
