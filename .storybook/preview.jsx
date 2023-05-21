import { themes } from '@storybook/theming';
import UIProvider from '../src/store/Provider';

import './storybook.scss';
import { INIT_STATE } from '../src/store/Context';

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
    <UIProvider value={INIT_STATE}>
      <main className='storybook'>
        <Story />
      </main>
    </UIProvider>
  ),
];
