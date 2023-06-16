import Floating, {
  FloatingProps,
} from '@src/components/molecules/Floating/Floating';
import type { StoryFn } from '@storybook/react';

export default {
  title: 'UI/Molecules/Floating',
  component: Floating,
  parameters: {
    componentSubtitle: 'Floating',
  },
  argTypes: {
    position: {
      options: ['tr', 'tl', 'br', 'bl'],
      control: {
        type: 'select',
      },
    },
  },
};

const floatingButtonTemplate = (args: FloatingProps): JSX.Element => {
  return (
    <Floating {...args}>
      <Floating.Button>+</Floating.Button>
    </Floating>
  );
};

export const FloatingButton: StoryFn<FloatingProps> =
  floatingButtonTemplate.bind({});
FloatingButton.args = {
  position: 'tl',
};
