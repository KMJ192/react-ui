import { RecoilRoot } from 'recoil';
import { themes } from '@storybook/theming';
import cloneDeep from 'lodash/cloneDeep';

import UIProvider from '../src/store/Provider';
import useUIState from '../src/store/hooks/useUIState';

import { COLOR } from '@styles/color';
import Floating from '@src/components/molecules/Floating/Floating';

import classNames from 'classnames/bind';
import style from './style.module.scss';
const cx = classNames.bind(style);

export const parameters = {
  backgrounds: {
    default: 'dark',
    values: [
      {
        name: 'dark',
        value: COLOR.dark.background.global,
      },
      {
        name: 'light',
        value: COLOR.light.background.global,
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
    <main className={cx('storybook', theme)}>
      <Floating>
        <Floating.Button
          onClick={() => {
            const newState = cloneDeep(ui);
            newState.theme = theme === 'light' ? 'dark' : 'light';
            setUI(newState);
          }}
        >
          {theme}
        </Floating.Button>
      </Floating>
      <section>{children}</section>
    </main>
  );
}

export const decorators = [
  (Story) => (
    <RecoilRoot>
      <UIProvider
        value={{
          theme: window.localStorage.getItem('theme'),
        }}
      >
        <GlobalStory>
          <Story />
        </GlobalStory>
      </UIProvider>
    </RecoilRoot>
  ),
];
