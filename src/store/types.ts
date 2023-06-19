type ContextState = {
  theme: string | null;
};

type ContextDispatch = [
  ContextState,
  (value: ContextState | ((value: ContextState) => ContextState)) => void,
];

export type { ContextState, ContextDispatch };
