type ContextState = {
  multiple: boolean;
  disabled: boolean;
  checked: boolean;
};

type ContextDispatch = [
  ContextState,
  (value: ContextState | ((value: ContextState) => ContextState)) => void,
];

export type { ContextState, ContextDispatch };
