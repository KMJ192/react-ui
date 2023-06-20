import type { StoryFn, Meta } from '@storybook/react';

import Popup from '@src/components/atoms/Popup/Popup';
import type { PopupProps } from '@src/components/atoms/Popup/Popup';

const meta: Meta<typeof Popup> = {
  title: 'UI/Atoms/Popup',
  component: Popup,
  parameters: {
    componentSubtitle: 'Popup',
  },
  argTypes: {
    animation: {
      options: ['fade', 'none'],
      control: {
        type: 'radio',
      },
    },
  },
};

const Template = (args: PopupProps) => {
  const { children, ...arg } = args;

  return <Popup {...arg}>{children}</Popup>;
};

export const PrimaryPopup: StoryFn<PopupProps> = Template.bind({});
PrimaryPopup.args = {
  children: 'Popup',
  animation: 'fade',
  visible: true,
  style: {
    padding: '30px',
  },
};

export default meta;
