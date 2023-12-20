import { TabDirection } from '../types';

type ContextState = {
  direction: TabDirection;
};

type ContextDispatch = [
  ContextState,
  (value: ContextState | ((value: ContextState) => ContextState)) => void,
];

export type { ContextState, ContextDispatch };
