import type { StoryFn, Meta } from '@storybook/react';

import Radio from '@src/components/atoms/Radio/Radio';
import type { RadioProps } from '@src/components/atoms/Radio/Radio';

const meta: Meta<typeof Radio> = {
  title: 'UI/Atoms/Radio',
  component: Radio,
  parameters: {
    componentSubtitle: 'Radio',
  },
  argTypes: {
    checked: {
      option: ['true', 'false'],
    },
    disabled: {
      option: ['true', 'false'],
    },
    size: {
      options: ['xs', 'sm', 'md', 'lg'],
      control: {
        type: 'select',
      },
    },
  },
};

const Template = (args: RadioProps) => {
  const { children, ...arg } = args;

  return <Radio {...arg}>{children}</Radio>;
};

export const PrimaryRadio: StoryFn<RadioProps> = Template.bind({});
PrimaryRadio.args = {
  children: 'Radio',
  checked: false,
  disabled: false,
  size: 'md',
};

export default meta;
