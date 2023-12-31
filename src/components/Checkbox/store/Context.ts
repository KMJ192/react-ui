import { createContext } from 'react';
import { deepClone } from '@src/utils/utils';

import type { ContextState, ContextDispatch } from './types';

const INIT_STATE: ContextState = {
  multiple: false,
  disabled: false,
  checked: false,
};

const INIT_CONTEXT: ContextDispatch = [
  deepClone(INIT_STATE),
  () => {
    return deepClone(INIT_STATE);
  },
];

const Context = createContext(INIT_CONTEXT);

export { INIT_STATE as INIT_TAB_STATE };
export default Context;
