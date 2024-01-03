import { createContext } from 'react';
import cloneDeep from 'lodash/cloneDeep';

type ContextState = {
  open: boolean;
  disabled: boolean;
  error: boolean;
  placeholder: string;
  direction: 'up' | 'down';
  selectBBox: {
    width: number;
    height: number;
    top: number;
    left: number;
  };
};

const INIT_STATE: ContextState = {
  open: false,
  disabled: false,
  error: false,
  placeholder: '',
  direction: 'up',
  selectBBox: {
    width: 0,
    height: 0,
    top: 0,
    left: 0,
  },
};

const Context = createContext(cloneDeep(INIT_STATE));

export { INIT_STATE as INIT_SELECT_STATE };
export default Context;
