import type { StoryFn, Meta } from '@storybook/react';

import Modal, { type ModalProps } from '@src/components/Modal/Modal';

const meta: Meta<typeof Modal> = {
  title: 'UI/Components/Modal',
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
