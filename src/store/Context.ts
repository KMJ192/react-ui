import { createContext } from 'react';
import _ from 'lodash';

import type { ContextState, ContextDispatch } from './types';

const INIT_STATE: ContextState = {};

const INIT_CONTEXT: ContextDispatch = [
  _.cloneDeep(INIT_STATE),
  () => {
    return _.cloneDeep(INIT_STATE);
  },
];

const Context = createContext(INIT_CONTEXT);

export { INIT_STATE };
export default Context;
