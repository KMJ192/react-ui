import { themes } from '@storybook/theming';
import { RecoilRoot } from 'recoil';
import cloneDeep from 'lodash/cloneDeep';

import UIProvider from '../src/store/Provider';
import useUIState from '../src/store/hooks/useUIState';

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
  const [ui, setUI] = useUIState();
  const { theme } = ui;

  return (
    <main className={`storybook ${theme}`}>
      <Button
        onClick={() => {
          const newState = cloneDeep(ui);
          newState.theme = theme === 'light' ? 'dark' : 'light';
          setUI(newState);
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
      <UIProvider>
        <GlobalStory>
          <Story />
        </GlobalStory>
      </UIProvider>
    </RecoilRoot>
  ),
];
