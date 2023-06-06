import { createContext } from 'react';
import cloneDeep from 'lodash/cloneDeep';

import type { ContextState, ContextDispatch } from './types';

import type { Theme as GlobalTheme } from '@src/types/types';

import Theme from './theme';

const INIT_STATE: ContextState = {
  theme:
    (window.localStorage.getItem('theme') as unknown as GlobalTheme) ?? 'light',
  themeSet: {
    light: {
      button: Theme.button.light,
    },
    dark: {
      button: Theme.button.dark,
    },
  },
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
