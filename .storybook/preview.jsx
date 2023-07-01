import { useEffect } from 'react';
import { RecoilRoot } from 'recoil';
import cloneDeep from 'lodash/cloneDeep';

import UIProvider from '../src/store/Provider';
import useUIState from '../src/store/hooks/useUIState';

import Floating from '@src/components/molecules/Floating/Floating';

import './index.css';

import classNames from 'classnames/bind';
import style from './style.module.scss';
const cx = classNames.bind(style);

function GlobalStory({ children }) {
  const [ui, setUI] = useUIState();
  const { theme } = ui;

  useEffect(() => {
    if (!theme) {
      setUI({
        theme: 'light',
      });
      window.localStorage.setItem('theme', 'light');
    }
  }, []);

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
      <section className={cx('contents')}>{children}</section>
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
