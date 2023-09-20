import { createContext } from 'react';
import cloneDeep from 'lodash/cloneDeep';

import type { ContextState } from './types';

const INIT_STATE: ContextState = {
  open: false,
  disabled: false,
  error: false,
};

const Context = createContext(cloneDeep(INIT_STATE));

export { INIT_STATE as INIT_SELECT_STATE };
export default Context;
