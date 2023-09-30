type ContextState = {
  open: boolean;
  disabled: boolean;
  error: boolean;
  isOption: boolean;
  selectBBox: {
    width: number;
    height: number;
    top: number;
    left: number;
  };
};

export type { ContextState };
