import { createContext } from 'react';
import { deepClone } from '@cdkit/common';

import { TabDirection } from '../types';

type ContextState = {
  direction: TabDirection;
};

const INIT_STATE: ContextState = {
  direction: 'horizontal',
};

const Context = createContext(deepClone(INIT_STATE));

export { INIT_STATE as INIT_TAB_STATE };
export default Context;
