import colorModule from './color.module.scss';

type COLOR_SCHEME =
  | 'primary' // 연하늘색 계열
  | 'secondary'
  | 'red'
  | 'green'
  | 'blue'
  | 'purple'
  | 'solid';

type ColorMap = {
  LIGHT: { [key: string]: any };
  DARK: { [key: string]: any };
  SOLID: {
    white: string;
    black: string;
  };
  INFO: string;
  WARNING: string;
  DANGER: string;
  SUCCESS: string;
};

const COLOR: ColorMap = {
  LIGHT: {
    primary: {
      '000': colorModule.light_primary000,
      '100': colorModule.light_primary100,
      '200': colorModule.light_primary200,
      '300': colorModule.light_primary300,
      '400': colorModule.light_primary400,
      '500': colorModule.light_primary500,
      '600': colorModule.light_primary600,
      '700': colorModule.light_primary700,
    },
    secondary: {
      '000': colorModule.light_secondary000,
      '100': colorModule.light_secondary100,
      '200': colorModule.light_secondary200,
      '300': colorModule.light_secondary300,
      '400': colorModule.light_secondary400,
      '500': colorModule.light_secondary500,
      '600': colorModule.light_secondary600,
      '700': colorModule.light_secondary700,
    },
    red: {
      '000': colorModule.light_red000,
      '100': colorModule.light_red100,
      '200': colorModule.light_red200,
      '300': colorModule.light_red300,
      '400': colorModule.light_red400,
      '500': colorModule.light_red500,
      '600': colorModule.light_red600,
      '700': colorModule.light_red700,
    },
    green: {
      '000': colorModule.light_green000,
      '100': colorModule.light_green100,
      '200': colorModule.light_green200,
      '300': colorModule.light_green300,
      '400': colorModule.light_green400,
      '500': colorModule.light_green500,
      '600': colorModule.light_green600,
      '700': colorModule.light_green700,
    },
    blue: {
      '000': colorModule.light_blue000,
      '100': colorModule.light_blue100,
      '200': colorModule.light_blue200,
      '300': colorModule.light_blue300,
      '400': colorModule.light_blue400,
      '500': colorModule.light_blue500,
      '600': colorModule.light_blue600,
      '700': colorModule.light_blue700,
    },
    purple: {
      '000': colorModule.light_purple000,
      '100': colorModule.light_purple100,
      '200': colorModule.light_purple200,
      '300': colorModule.light_purple300,
      '400': colorModule.light_purple400,
      '500': colorModule.light_purple500,
      '600': colorModule.light_purple600,
      '700': colorModule.light_purple700,
    },
    danger: colorModule.light_danger,
    warning: colorModule.light_warning,
    success: colorModule.light_success,
    info: colorModule.light_info,
    background: colorModule.light_background,
    text: colorModule.light_text,
  },
  DARK: {
    primary: {},
    secondary: {},
    red: {},
    green: {},
    blue: {},
    danger: '',
    success: '',
    background: '',
    text: '',
  },
  SOLID: {
    white: colorModule.white,
    black: colorModule.black,
  },
  INFO: '',
  WARNING: '',
  DANGER: '',
  SUCCESS: '',
};

export type { ColorMap, COLOR_SCHEME };
export { COLOR };
