import { COLOR } from '@src/color/color';
import type { ColorCategory } from '@src/styles/color';

import Text from '@src/components/Text/Text';

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
  'global',
];

const COLOR_MAP: {
  light: {
    primary: { [key: string]: string };
    blue: { [key: string]: string };
    green: { [key: string]: string };
    red: { [key: string]: string };
    background: { [key: string]: string };
    text: { [key: string]: string };
  };
  dark: {
    primary: { [key: string]: string };
    blue: { [key: string]: string };
    green: { [key: string]: string };
    red: { [key: string]: string };
    background: { [key: string]: string };
    text: { [key: string]: string };
  };
  solid: { [key: string]: string };
} = {
  light: {
    primary: {
      '000': COLOR.LIGHT.primary000,
      '200': COLOR.LIGHT.primary200,
      '100': COLOR.LIGHT.primary100,
      '400': COLOR.LIGHT.primary400,
      '300': COLOR.LIGHT.primary300,
      '600': COLOR.LIGHT.primary600,
      '500': COLOR.LIGHT.primary500,
      '700': COLOR.LIGHT.primary700,
      '800': COLOR.LIGHT.primary800,
      '900': COLOR.LIGHT.primary900,
    },
    blue: {
      '000': COLOR.LIGHT.blue000,
      '100': COLOR.LIGHT.blue100,
      '200': COLOR.LIGHT.blue200,
      '300': COLOR.LIGHT.blue300,
      '400': COLOR.LIGHT.blue400,
      '500': COLOR.LIGHT.blue500,
      '600': COLOR.LIGHT.blue600,
      '700': COLOR.LIGHT.blue700,
    },
    green: {
      '000': COLOR.LIGHT.green000,
      '100': COLOR.LIGHT.green100,
      '200': COLOR.LIGHT.green200,
      '300': COLOR.LIGHT.green300,
      '400': COLOR.LIGHT.green400,
      '500': COLOR.LIGHT.green500,
      '600': COLOR.LIGHT.green600,
      '700': COLOR.LIGHT.green700,
    },
    red: {
      '000': COLOR.LIGHT.red000,
      '100': COLOR.LIGHT.red100,
      '200': COLOR.LIGHT.red200,
      '300': COLOR.LIGHT.red300,
      '400': COLOR.LIGHT.red400,
      '500': COLOR.LIGHT.red500,
      '600': COLOR.LIGHT.red600,
      '700': COLOR.LIGHT.red700,
      '800': COLOR.LIGHT.red800,
      '900': COLOR.LIGHT.red900,
    },
    background: {
      global: COLOR.LIGHT.background,
    },
    text: {
      global: COLOR.LIGHT.text,
    },
  },
  dark: {
    primary: {
      '000': COLOR.DARK.primary000,
      '100': COLOR.DARK.primary100,
      '200': COLOR.DARK.primary200,
      '300': COLOR.DARK.primary300,
      '400': COLOR.DARK.primary400,
      '500': COLOR.DARK.primary500,
      '600': COLOR.DARK.primary600,
      '700': COLOR.DARK.primary700,
    },
    blue: {
      '000': COLOR.DARK.blue000,
      '100': COLOR.DARK.blue100,
      '200': COLOR.DARK.blue200,
      '300': COLOR.DARK.blue300,
      '400': COLOR.DARK.blue400,
      '500': COLOR.DARK.blue500,
      '600': COLOR.DARK.blue600,
      '700': COLOR.DARK.blue700,
    },
    green: {
      '000': COLOR.DARK.green000,
      '100': COLOR.DARK.green100,
      '200': COLOR.DARK.green200,
      '300': COLOR.DARK.green300,
      '400': COLOR.DARK.green400,
      '500': COLOR.DARK.green500,
      '600': COLOR.DARK.green600,
      '700': COLOR.DARK.green700,
    },
    red: {
      '000': COLOR.DARK.red000,
      '100': COLOR.DARK.red100,
      '200': COLOR.DARK.red200,
      '300': COLOR.DARK.red300,
      '400': COLOR.DARK.red400,
      '500': COLOR.DARK.red500,
      '600': COLOR.DARK.red600,
      '700': COLOR.DARK.red700,
    },
    background: {
      global: COLOR.DARK.background,
    },
    text: {
      global: COLOR.DARK.text,
    },
  },
  solid: {
    white: COLOR.SOLID.white,
    black: COLOR.SOLID.black,
  },
};

function Color({ theme = 'light' }: Props) {
  return (
    <div className={cx('container', theme)}>
      <Text typo='h2'>{theme} Theme</Text>
      <div className={cx('contents')}>
        {theme === 'light' &&
          Object.keys(COLOR_MAP.light).map((category: string, idx: number) => {
            const c = COLOR_MAP.light[category as ColorCategory];
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
                    return null;
                  })}
                </div>
              </div>
            );
          })}
        {theme === 'dark' &&
          Object.keys(COLOR_MAP.dark).map((category: string, idx: number) => {
            const c = COLOR_MAP.dark[category as ColorCategory];
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
                    return null;
                  })}
                </div>
              </div>
            );
          })}
        <div className={cx('categories', theme)}>
          <Text typo='h3'>solid</Text>
          <div className={cx('color')}>
            {Object.keys(COLOR_MAP.solid).map((color: string, idx: number) => {
              const value = COLOR_MAP.solid[color];
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
