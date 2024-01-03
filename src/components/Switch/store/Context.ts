import { createContext } from 'react';
import { deepClone } from '@cdkit/common';

type ContextState = {
  checked: boolean;
  disabled: boolean;
};

const INIT_STATE: ContextState = {
  checked: false,
  disabled: false,
};

const Context = createContext(deepClone(INIT_STATE));

export { INIT_STATE as INIT_TAB_STATE };
export default Context;
