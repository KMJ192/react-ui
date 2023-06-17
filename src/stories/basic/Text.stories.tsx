import type { Meta } from '@storybook/react';

import T from '@src/components/basic/Text/Text';

const meta: Meta<typeof T> = {
  title: 'UI/Basic/Text',
  component: T,
  parameters: {
    componentSubtitle: 'T',
  },
  argTypes: {},
};

export const TextView = () => {
  return <T />;
};

export default meta;
