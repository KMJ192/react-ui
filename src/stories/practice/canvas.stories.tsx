import type { StoryFn, Meta } from '@storybook/react';
import Canvas from '@src/practice/canvas/Canvas';

const meta: Meta<typeof Canvas> = {
  title: 'Practice/canvas',
  component: Canvas,
  parameters: {
    componentSubtitle: 'Canvas',
  },
  argTypes: {
    type: {
      options: ['particle', 'fireworks'],
      control: {
        type: 'radio',
      },
    },
  },
};

const Template = (args: any) => {
  return <Canvas {...args} />;
};

export const ParticleStory: StoryFn = Template.bind({});
ParticleStory.args = {
  type: 'particle',
};

export const FireWorksStory: StoryFn = Template.bind({});
FireWorksStory.args = {
  type: 'fireworks',
};

export default meta;
