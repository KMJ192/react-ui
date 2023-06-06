import type { Theme } from '@src/types/types';
import type { ButtonTheme } from './theme';

type Components = {
  button: ButtonTheme;
};

type ContextState = {
  theme: Theme;
  themeSet: {
    light: Components;
    dark: Components;
    [custom: string]: Components;
  };
};

type ContextDispatch = [
  ContextState,
  (value: ContextState | ((value: ContextState) => ContextState)) => void,
];

export type { ContextState, ContextDispatch };
