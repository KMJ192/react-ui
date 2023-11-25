import type { StoryFn, Meta } from '@storybook/react';

import Center from '@src/layout/Center/Center';
import type { CenterProps } from '@src/layout/Center/Center';

const meta: Meta<typeof Center> = {
  title: 'UI/Layout/Center',
  component: Center,
  parameters: {
    componentSubtitle: 'Center',
  },
  argTypes: {
    display: {
      options: ['flex', 'grid'],
      control: {
        type: 'radio',
      },
    },
    flexDirection: {
      options: ['column', 'row', 'column-reverse', 'row-reverse'],
      control: {
        type: 'radio',
      },
    },
  },
};

const Template = (args: CenterProps) => {
  const { children, ...arg } = args;

  return <Center {...arg}>{children}</Center>;
};

export const CenterStory: StoryFn<CenterProps> = Template.bind({});
CenterStory.args = {
  children: 'Center',
  as: 'div',
  vertical: true,
  horizontal: true,
  display: 'flex',
  flexDirection: 'row',
};

export default meta;
