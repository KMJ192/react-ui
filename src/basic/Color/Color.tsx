import { COLOR } from '@src/styles/color';
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
      '000': COLOR.light.primary['000'],
      '200': COLOR.light.primary['200'],
      '100': COLOR.light.primary['100'],
      '400': COLOR.light.primary['400'],
      '300': COLOR.light.primary['300'],
      '600': COLOR.light.primary['600'],
      '500': COLOR.light.primary['500'],
      '700': COLOR.light.primary['700'],
      '800': COLOR.light.primary['800'],
      '900': COLOR.light.primary['900'],
    },
    blue: {
      '000': COLOR.light.blue['000'],
      '100': COLOR.light.blue['100'],
      '200': COLOR.light.blue['200'],
      '300': COLOR.light.blue['300'],
      '400': COLOR.light.blue['400'],
      '500': COLOR.light.blue['500'],
      '600': COLOR.light.blue['600'],
      '700': COLOR.light.blue['700'],
    },
    green: {
      '000': COLOR.light.green['000'],
      '100': COLOR.light.green['100'],
      '200': COLOR.light.green['200'],
      '300': COLOR.light.green['300'],
      '400': COLOR.light.green['400'],
      '500': COLOR.light.green['500'],
      '600': COLOR.light.green['600'],
      '700': COLOR.light.green['700'],
    },
    red: {
      '000': COLOR.light.red['000'],
      '100': COLOR.light.red['100'],
      '200': COLOR.light.red['200'],
      '300': COLOR.light.red['300'],
      '400': COLOR.light.red['400'],
      '500': COLOR.light.red['500'],
      '600': COLOR.light.red['600'],
      '700': COLOR.light.red['700'],
      '800': COLOR.light.red['800'],
      '900': COLOR.light.red['900'],
    },
    background: {
      global: COLOR.light.background,
    },
    text: {
      global: COLOR.light.text,
    },
  },
  dark: {
    primary: {
      '000': COLOR.dark.primary['000'],
      '100': COLOR.dark.primary['100'],
      '200': COLOR.dark.primary['200'],
      '300': COLOR.dark.primary['300'],
      '400': COLOR.dark.primary['400'],
      '500': COLOR.dark.primary['500'],
      '600': COLOR.dark.primary['600'],
      '700': COLOR.dark.primary['700'],
    },
    blue: {
      '000': COLOR.dark.blue['000'],
      '100': COLOR.dark.blue['100'],
      '200': COLOR.dark.blue['200'],
      '300': COLOR.dark.blue['300'],
      '400': COLOR.dark.blue['400'],
      '500': COLOR.dark.blue['500'],
      '600': COLOR.dark.blue['600'],
      '700': COLOR.dark.blue['700'],
    },
    green: {
      '000': COLOR.dark.green['000'],
      '100': COLOR.dark.green['100'],
      '200': COLOR.dark.green['200'],
      '300': COLOR.dark.green['300'],
      '400': COLOR.dark.green['400'],
      '500': COLOR.dark.green['500'],
      '600': COLOR.dark.green['600'],
      '700': COLOR.dark.green['700'],
    },
    red: {
      '000': COLOR.dark.red['000'],
      '100': COLOR.dark.red['100'],
      '200': COLOR.dark.red['200'],
      '300': COLOR.dark.red['300'],
      '400': COLOR.dark.red['400'],
      '500': COLOR.dark.red['500'],
      '600': COLOR.dark.red['600'],
      '700': COLOR.dark.red['700'],
    },
    background: {
      global: COLOR.dark.background,
    },
    text: {
      global: COLOR.dark.text,
    },
  },
  solid: {
    white: COLOR.solid.white,
    black: COLOR.solid.black,
  },
};

function Color({ theme = 'light' }: Props) {
  return (
    <div className={cx('container', theme)}>
      <Text typo='h2'>{theme} Theme</Text>
      {/* <div className={cx('contents')}>
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
      </div> */}
    </div>
  );
}

export default Color;
