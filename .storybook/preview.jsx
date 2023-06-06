import { themes } from '@storybook/theming';
import { RecoilRoot, useRecoilState } from 'recoil';

import UIProvider from '../src/store/Provider';
import { globalAtom } from '../src/recoilStore/global';

import { INIT_STATE } from '../src/store/Context';
import Button from '@src/components/atoms/Button/Button';

import './index.scss';

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

function GlobalStory({ children }) {
  const [state, setState] = useRecoilState(globalAtom);
  const { theme } = state;

  return (
    <main className={`storybook ${theme}`}>
      <Button
        onClick={() => {
          setState({ theme: theme === 'light' ? 'dark' : 'light' });
        }}
      >
        {theme}
      </Button>
      <section>{children}</section>
    </main>
  );
}

export const decorators = [
  (Story) => (
    <RecoilRoot>
      <UIProvider value={INIT_STATE}>
        <GlobalStory>
          <Story />
        </GlobalStory>
      </UIProvider>
    </RecoilRoot>
  ),
];
