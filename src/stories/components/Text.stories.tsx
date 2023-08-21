import type { Meta, StoryFn } from '@storybook/react';

import Text, { type TextProps } from '@src/components/Text/Text';

const meta: Meta<typeof Text> = {
  title: 'UI/Components/Text',
  component: Text,
  parameters: {
    componentSubtitle: 'Text',
  },
  argTypes: {
    typo: {
      options: ['h1', 'h2', 'h3', 't1', 't2', 's1', 's2', 'b1', 'b2', 'c1'],
      control: {
        type: 'select',
      },
    },
  },
};

const textTemplate = (args: TextProps) => {
  return <Text {...args}>{args.children}</Text>;
};

export const Typo: StoryFn<TextProps> = textTemplate.bind({});
Typo.args = {
  children: 'text',
  typo: 'h1',
  ellipsis: false,
};

export default meta;
