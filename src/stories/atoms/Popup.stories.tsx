import type { StoryFn, Meta } from '@storybook/react';

import Popup from '@src/components/atoms/Popup/Popup';
import type { PopupProps } from '@src/components/atoms/Popup/Popup';

const meta: Meta<typeof Popup> = {
  title: 'UI/Atoms/Popup',
  component: Popup,
  parameters: {
    componentSubtitle: 'Popup',
  },
  argTypes: {},
};

const Template = (args: PopupProps) => {
  const { children, ...arg } = args;

  return <Popup {...arg}>{children}</Popup>;
};

export const Test: StoryFn<PopupProps> = Template.bind({});
Test.args = {
  children: 'Popup',
  type: 'fade',
};

export default meta;
