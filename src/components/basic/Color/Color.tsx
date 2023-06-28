import { COLOR } from '@src/styles/color';
import type { ColorCategory } from '@src/styles/color';

import Text from '@src/components/atoms/Text/Text';

import classNames from 'classnames/bind';
import style from './style.module.scss';
const cx = classNames.bind(style);

type Props = {
  theme: string | null;
};

const colorKey = [
  '000',
  '100',
  '200',
  '300',
  '400',
  '500',
  '600',
  '700',
  '800',
  '900',
];

function Color({ theme = 'light' }: Props) {
  return (
    <div className={cx('container', theme)}>
      <Text typo='h2'>{theme} Theme</Text>
      <div className={cx('contents')}>
        {theme === 'light' &&
          Object.keys(COLOR.light).map((category: string, idx: number) => {
            const c = COLOR.light[category as ColorCategory];
            return (
              <div
                className={cx('categories', theme)}
                key={`${category}-${idx}`}
              >
                <Text typo='h3'>{category}</Text>
                <div className={cx('color')}>
                  {colorKey.map((key: string, i: number) => {
                    const value = c[key];
                    if (value) {
                      return (
                        <div className={cx('block')} key={`light-${i}`}>
                          <Text typo='t2'>
                            {category}-{key}
                          </Text>
                          <Text typo='s1'>{value}</Text>
                          <div
                            className={cx('preview', theme)}
                            style={{
                              background: value,
                            }}
                          ></div>
                        </div>
                      );
                    }
                    return <></>;
                  })}
                </div>
              </div>
            );
          })}
        {theme === 'dark' &&
          Object.keys(COLOR.dark).map((category: string, idx: number) => {
            const c = COLOR.dark[category as ColorCategory];
            return (
              <div
                className={cx('categories', theme)}
                key={`${category}-${idx}`}
              >
                <Text typo='h3'>{category}</Text>
                <div className={cx('color')}>
                  {colorKey.map((key: string, i: number) => {
                    const value = c[key];

                    if (value) {
                      return (
                        <div className={cx('block')} key={`light-${i}`}>
                          <Text typo='t2'>
                            {category}-{key}
                          </Text>
                          <Text typo='s1'>{value}</Text>
                          <div
                            className={cx('preview', theme)}
                            style={{
                              background: value,
                            }}
                          ></div>
                        </div>
                      );
                    }
                    return <></>;
                  })}
                </div>
              </div>
            );
          })}
        <div className={cx('categories', theme)}>
          <Text typo='h3'>solid</Text>
          <div className={cx('color')}>
            {Object.keys(COLOR.solid).map((color: string, idx: number) => {
              const value = COLOR.solid[color];
              return (
                <div className={cx('block')} key={`solid-${idx}`}>
                  <Text typo='t2'>{color}</Text>
                  <Text typo='s1'>{value}</Text>
                  <div
                    className={cx('preview', theme)}
                    style={{
                      background: value,
                    }}
                  ></div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Color;
