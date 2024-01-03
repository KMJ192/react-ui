import { createContext } from 'react';
import { deepClone } from '@cdkit/common';

type ContextState = {
  percent: number;
  pending: boolean;
};

const INIT_STATE: ContextState = {
  percent: 0,
  pending: false,
};

const Context = createContext(deepClone(INIT_STATE));

export { INIT_STATE as INIT_TAB_STATE };
export default Context;
