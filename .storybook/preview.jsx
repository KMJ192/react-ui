import { themes } from '@storybook/theming';
import UIProvider from '../src/store/Provider';

import './storybook.scss';

export const parameters = {
  backgrounds: {
    default: 'dark',
    values: [
      {
        name: 'dark',
        value: '#1d1d1d',
      },
      {
        name: 'light',
        value: '#ffffff',
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
    <UIProvider value={{}}>
      <main className='storybook'>
        <Story />
      </main>
    </UIProvider>
  ),
];
