import type { StoryFn, Meta } from '@storybook/react';

import Radio, { type RadioProps } from '../components/Radio/Radio';

const meta: Meta<typeof Radio> = {
  title: 'UI/Components/Radio',
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
  size: 16,
  pupilSize: 10,
  fontSize: 16,
};

export default meta;
