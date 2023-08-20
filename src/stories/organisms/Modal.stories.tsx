import type { StoryFn, Meta } from '@storybook/react';

import Modal from '@src/Legacy/organisms/Modal/Modal';
import type { ModalProps } from '@src/Legacy/organisms/Modal/Modal';

const meta: Meta<typeof Modal> = {
  title: 'UI/Organisms/Modal',
  component: Modal,
  parameters: {
    componentSubtitle: 'Modal',
  },
  argTypes: {},
};

const Template = (args: ModalProps) => {
  const { children, ...arg } = args;

  return <Modal {...arg}>{children}</Modal>;
};

export const PrimaryModal: StoryFn<ModalProps> = Template.bind({});
PrimaryModal.args = {
  children: 'Test',
};

export default meta;
