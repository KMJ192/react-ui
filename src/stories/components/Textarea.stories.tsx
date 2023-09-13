import type { StoryFn, Meta } from '@storybook/react';

import Textarea, {
  type TextareaProps,
} from '@src/components/Textarea/Textarea';

const meta: Meta<typeof Textarea> = {
  title: 'UI/Components/Textarea',
  component: Textarea,
  parameters: {
    componentSubtitle: 'Textarea',
  },
  argTypes: {},
};

const Template = (args: TextareaProps) => {
  return <Textarea {...args}></Textarea>;
};

export const TextareaStory: StoryFn<TextareaProps> = Template.bind({});
TextareaStory.args = {};

export default meta;
