import type { Meta } from '@storybook/react';

import Button from './Button';

const meta: Meta<typeof Button> = {
  title: 'UI/Button',
  component: Button,
  parameters: {
    componentSubtitle: 'Button',
  },
};

export const button = (): JSX.Element => {
  return <Button>primary</Button>;
};

export default meta;
