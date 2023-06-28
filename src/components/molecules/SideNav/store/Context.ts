import { createContext } from 'react';
import { cloneDeep } from 'lodash';

import type { SideNavState, SideNavStateDispatch } from './types';

const INIT_STATE: SideNavState = {
  position: 'left',
};

const INIT_CONTEXT: SideNavStateDispatch = [
  cloneDeep(INIT_STATE),
  () => {
    return cloneDeep(INIT_STATE);
  },
];

const Context = createContext(INIT_CONTEXT);

export default Context;
