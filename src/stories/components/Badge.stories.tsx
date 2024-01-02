import type { StoryFn, Meta } from '@storybook/react';

import Badge, { type BadgeProps } from '@src/components/Badge/Badge';
import { display, flexDirection } from './common';
// import { Badge, type BadgeProps } from '@cdkit/react-ui';

import style from './Components.module.scss';

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
    display,
    flexDirection,
  },
};

const Template = (args: BadgeProps) => {
  const { children, ...arg } = args;

  return (
    <Badge {...arg} className={style.badge}>
      {children}
    </Badge>
  );
};

export const BadgeStory: StoryFn<BadgeProps> = Template.bind({});
BadgeStory.args = {
  children: 'Badge',
  colorSchema: 'success',
  centerVertical: false,
  centerHorizontal: false,
};

export default meta;
