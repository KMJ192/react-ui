import type { StoryFn, Meta } from '@storybook/react';
import Canvas from '@src/practice/canvas/Canvas';

const meta: Meta<typeof Canvas> = {
  title: 'Practice/canvas',
  component: Canvas,
  parameters: {
    componentSubtitle: 'Canvas',
  },
  argTypes: {},
};

const Template = () => {
  return <Canvas />;
};

export const TestStory: StoryFn = Template.bind({});
TestStory.args = {
  children: 'Test',
};

export default meta;
