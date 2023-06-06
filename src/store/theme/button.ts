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
      hover: COLOR.light.primary001,
      disabled: COLOR.light.primary200,
    },
    text: {
      default: COLOR.light.primary700,
      hover: COLOR.light.primary700,
      disabled: COLOR.light.primary301,
    },
  },
  dark: {
    background: {
      default: COLOR.dark.primary000,
      hover: COLOR.dark.primary001,
      disabled: COLOR.dark.primary200,
    },
    text: {
      default: COLOR.dark.primary700,
      hover: COLOR.dark.primary700,
      disabled: COLOR.dark.primary301,
    },
  },
};

export type { ButtonTheme };
export { button };
