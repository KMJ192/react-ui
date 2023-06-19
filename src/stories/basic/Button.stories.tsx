import type { Meta } from '@storybook/react';

import Button from '@src/components/basic/Button/Button';

const meta: Meta<typeof Button> = {
  title: 'UI/Basic/Button',
  component: Button,
  parameters: {
    componentSubtitle: 'Button',
  },
  argTypes: {},
};

export const ButtonView = () => {
  return <Button />;
};

export default meta;
