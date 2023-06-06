import { COLOR } from '@src/styles/color';

type ButtonTheme = {
  background: {
    default: string;
    hover: string;
    disabled: string;
  };
  text: {
    default: string;
    hover: string;
    disabled: string;
  };
};

const button: {
  light: ButtonTheme;
  dark: ButtonTheme;
} = {
  light: {
    background: {
      default: COLOR.light.primary000,
      hover: COLOR.light.primary100,
      disabled: COLOR.light.primary200,
    },
    text: {
      default: COLOR.light.primary700,
      hover: COLOR.light.primary700,
      disabled: COLOR.light.primary300,
    },
  },
  dark: {
    background: {
      default: COLOR.dark.primary200,
      hover: COLOR.dark.primary300,
      disabled: COLOR.dark.primary200,
    },
    text: {
      default: COLOR.dark.primary600,
      hover: COLOR.dark.primary700,
      disabled: COLOR.dark.primary300,
    },
  },
};

export type { ButtonTheme };
export { button };
