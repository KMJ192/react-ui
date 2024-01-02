import type { StoryFn, Meta } from '@storybook/react';

import Popup, { type PopupProps } from '@src/components/Popup/Popup';
import { display, flexDirection } from './common';
// import { Popup, type PopupProps } from '@cdkit/react-ui';

const meta: Meta<typeof Popup> = {
  title: 'UI/Components/Popup',
  component: Popup,
  parameters: {
    componentSubtitle: 'Popup',
  },
  argTypes: {
    animation: {
      options: ['fade', 'up', 'down', 'left', 'right', 'none'],
      control: {
        type: 'radio',
      },
    },
    display,
    flexDirection,
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
  display: 'flex',
  flexDirection: 'row',
  centerVertical: false,
  centerHorizontal: false,
};

export default meta;
