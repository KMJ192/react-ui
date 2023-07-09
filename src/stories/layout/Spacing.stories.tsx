import type { StoryFn, Meta } from '@storybook/react';

import Spacing from '@src/components/layout/Spacing/Spacing';
import type { SpacingProps } from '@src/components/layout/Spacing/Spacing';

const meta: Meta<typeof Spacing> = {
  title: 'UI/Layout/Spacing',
  component: Spacing,
  parameters: {
    componentSubtitle: 'Spacing',
  },
  argTypes: {
    direction: {
      options: ['horizontal', 'vertical'],
      control: {
        type: 'radio',
      },
    },
  },
};

const LayoutTemplate = (args: SpacingProps) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: args.direction === 'vertical' ? 'column' : 'row',
      }}
    >
      <div>layout</div>
      <Spacing {...args} />
      <div>layout</div>
    </div>
  );
};

export const SpacingStory: StoryFn<SpacingProps> = LayoutTemplate.bind({});
SpacingStory.args = {
  direction: 'vertical',
  size: 8,
};

export default meta;
