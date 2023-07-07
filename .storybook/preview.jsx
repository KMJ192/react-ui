import { useEffect, useRef, useState } from 'react';
import { RecoilRoot } from 'recoil';
import cloneDeep from 'lodash/cloneDeep';

import UIProvider from '../src/store/Provider';
import useUIState from '../src/store/hooks/useUIState';

import Float from '@src/components/layout/Float/Float';
import Button from '@src/components/atoms/Button/Button';

import './index.css';

import classNames from 'classnames/bind';
import style from './style.module.scss';
const cx = classNames.bind(style);

function GlobalStory({ children }) {
  const mainRef = useRef(null);
  const [floatPos, setFloatPos] = useState({
    x: 0,
    y: 50,
  });
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

  useEffect(() => {
    setFloatPos({
      ...floatPos,
      x: window.innerWidth - 80,
    });
  }, []);

  return (
    <main className={cx('storybook', theme)}>
      <Float {...floatPos} className={cx('float')}>
        <Button
          onClick={() => {
            const newState = cloneDeep(ui);
            newState.theme = theme === 'light' ? 'dark' : 'light';
            setUI(newState);
          }}
          shape='circle'
          className={cx('float-btn')}
        >
          {theme}
        </Button>
      </Float>
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
