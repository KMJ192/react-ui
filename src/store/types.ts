import type { Theme } from '@src/types/types';

type ContextState = {
  theme: Theme;
};

type ContextDispatch = [
  ContextState,
  (value: ContextState | ((value: ContextState) => ContextState)) => void,
];

export type { ContextState, ContextDispatch };
