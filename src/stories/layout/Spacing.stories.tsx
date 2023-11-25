import type { StoryFn, Meta } from '@storybook/react';

import Spacing from '@src/layout/Spacing/Spacing';
import type { SpacingProps } from '@src/layout/Spacing/Spacing';

import style from './layout.module.scss';

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
    unit: {
      options: ['px', 'em', 'rem'],
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
      <Spacing className={style.spacing} {...args} />
      <div>layout</div>
    </div>
  );
};

export const SpacingStory: StoryFn<SpacingProps> = LayoutTemplate.bind({});
SpacingStory.args = {
  direction: 'vertical',
  spacing: 12,
  unit: 'px',
};

export default meta;
