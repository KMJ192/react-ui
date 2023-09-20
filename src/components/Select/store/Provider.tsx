import { ReactNode } from 'react';
import cloneDeep from 'lodash/cloneDeep';

import Context from './Context';

import type { ContextState } from './types';

type Props = {
  children: ReactNode;
  value: ContextState;
};

function Provider({ value, children }: Props) {
  return (
    <Context.Provider value={cloneDeep(value)}>{children}</Context.Provider>
  );
}

export default Provider;
