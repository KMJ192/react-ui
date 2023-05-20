import { themes } from '@storybook/theming';

import './storybook.css';

export const parameters = {
  backgrounds: {
    default: 'black',
    values: [
      {
        name: 'white',
        value: '#FFFFFF',
      },
      {
        name: 'black',
        value: '#000000',
      },
    ],
  },
  darkMode: {
    classTarget: 'html',
    base: 'dark',
    dark: {
      ...themes.dark,
      appContentBg: '#101010',
      appBg: '#101010',
    },
    light: {
      ...themes.light,
      appBg: '#fff',
    },
  },
};

export const decorators = [
  (Story) => (
    <main className='storybook'>
      <Story />
    </main>
  ),
];
