import { COLOR } from '@src/styles/color';

import classNames from 'classnames/bind';
import style from './style.module.scss';
import { Theme } from '@src/types/types';
const cx = classNames.bind(style);

type Props = {
  theme?: Theme;
};

function Color({ theme = 'light' }: Props) {
  return (
    <div className={cx('container')}>
      <div className={cx('title')}>{theme} Theme</div>
      <div className={cx('contents')}>
        {theme === 'light' &&
          Object.keys(COLOR.light).map((color: string, idx: number) => {
            const value = COLOR.light[color];
            return (
              <div className={cx('color')} key={`light-${idx}`}>
                <div className={cx('name')}>{color}</div>
                <div className={cx('value')}>{value}</div>
                <div
                  className={cx('preview')}
                  style={{
                    background: value,
                  }}
                ></div>
              </div>
            );
          })}
        {theme === 'dark' &&
          Object.keys(COLOR.dark).map((color: string, idx: number) => {
            const value = COLOR.dark[color];
            return (
              <div className={cx('color')} key={`dark-${idx}`}>
                <div className={cx('name')}>{color}</div>
                <div className={cx('value')}>{value}</div>
                <div
                  className={cx('preview')}
                  style={{
                    background: value,
                  }}
                ></div>
              </div>
            );
          })}
        {Object.keys(COLOR.solid).map((color: string, idx: number) => {
          const value = COLOR.solid[color];
          return (
            <div className={cx('color')} key={`solid-${idx}`}>
              <div className={cx('name')}>{color}</div>
              <div className={cx('value')}>{value}</div>
              <div
                className={cx('preview')}
                style={{
                  background: value,
                }}
              ></div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Color;
