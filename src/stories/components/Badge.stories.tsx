import type { StoryFn, Meta } from '@storybook/react';

// import Badge, { type BadgeProps } from '@src/components/Badge/Badge';
import { Badge, type BadgeProps } from '@upcast/react-ui';

const meta: Meta<typeof Badge> = {
  title: 'UI/Components/Badge',
  component: Badge,
  parameters: {
    componentSubtitle: 'Test',
  },
  argTypes: {
    colorSchema: {
      options: ['primary', 'success', 'info', 'warning', 'danger', 'custom'],
      control: {
        type: 'select',
      },
    },
  },
};

const Template = (args: BadgeProps) => {
  const { children, ...arg } = args;

  return <Badge {...arg}>{children}</Badge>;
};

export const BadgeStory: StoryFn<BadgeProps> = Template.bind({});
BadgeStory.args = {
  children: 'Badge',
  colorSchema: 'success',
};

export default meta;
