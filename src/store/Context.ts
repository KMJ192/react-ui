import { createContext } from 'react';
import cloneDeep from 'lodash/cloneDeep';

import type { ContextState, ContextDispatch } from './types';

import type { Theme as GlobalTheme } from '@src/types/types';

const INIT_STATE: ContextState = {
  theme:
    (window.localStorage.getItem('theme') as unknown as GlobalTheme) ?? 'light',
};

const INIT_CONTEXT: ContextDispatch = [
  cloneDeep(INIT_STATE),
  () => {
    return cloneDeep(INIT_STATE);
  },
];

const Context = createContext(INIT_CONTEXT);

export { INIT_STATE };
export default Context;
