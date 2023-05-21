import { Theme } from '@src/types/types';

type ContextState = {};

type ContextDispatch = [
  ContextState,
  (value: ContextState | ((value: ContextState) => ContextState)) => void,
];

export type { ContextState, ContextDispatch };
