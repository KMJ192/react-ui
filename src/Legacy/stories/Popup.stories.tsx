import type { StoryFn, Meta } from '@storybook/react';

import Popup, { type PopupProps } from '../components/Popup/Popup';

const meta: Meta<typeof Popup> = {
  title: 'UI/Legacy/Popup',
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
