import { ReactNode, useState } from 'react';
import { ContextState } from './types';
import Context from './Context';
import _ from 'lodash';

type Props = {
  value: ContextState;
  children: ReactNode;
};

function Provider({ value, children }: Props) {
  const contextState = useState<ContextState>(_.cloneDeep(value));

  return <Context.Provider value={contextState}>{children}</Context.Provider>;
}

export default Provider;
