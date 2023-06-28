type ContextState = {
  position: 'left' | 'right';
};

type ContextDispatch = [
  ContextState,
  (value: ContextState | ((value: ContextState) => ContextState)) => void,
];

export type {
  ContextState as SideNavState,
  ContextDispatch as SideNavStateDispatch,
};
