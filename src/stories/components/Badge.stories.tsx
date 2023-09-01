import type { StoryFn, Meta } from '@storybook/react';

import Badge, { type BadgeProps } from '@src/components/Badge/Badge';

const meta: Meta<typeof Badge> = {
  title: 'UI/Components/Badge',
  component: Badge,
  parameters: {
    componentSubtitle: 'Test',
  },
  argTypes: {},
};

const Template = (args: BadgeProps) => {
  const { children, ...arg } = args;

  return <Badge {...arg}>{children}</Badge>;
};

export const BadgeStory: StoryFn<BadgeProps> = Template.bind({});
BadgeStory.args = {
  children: 'Badge',
};

export default meta;
