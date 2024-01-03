import { createContext } from 'react';
import { deepClone } from '@src/utils/utils';

type ContextState = {
  multiple: boolean;
  checked: boolean;
  disabled: boolean;
};

const INIT_STATE: ContextState = {
  multiple: false,
  checked: false,
  disabled: false,
};

const Context = createContext(deepClone(INIT_STATE));

export { INIT_STATE as INIT_TAB_STATE };
export default Context;
