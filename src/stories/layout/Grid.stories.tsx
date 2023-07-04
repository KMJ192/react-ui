import type { StoryFn, Meta } from '@storybook/react';

import Grid from '@src/components/layout/Grid/Grid';
import type { GridProps } from '@src/components/layout/Grid/Grid';

const meta: Meta<typeof Grid> = {
  title: 'UI/Layout/Grid',
  component: Grid,
  parameters: {
    componentSubtitle: 'Grid',
  },
  argTypes: {},
};

const Template = (args: GridProps) => {
  const { children, ...arg } = args;

  return <Grid {...arg}>{children}</Grid>;
};

export const GridStory: StoryFn<GridProps> = Template.bind({});
GridStory.args = {
  children: 'Grid',
  as: 'div',
};

export default meta;
