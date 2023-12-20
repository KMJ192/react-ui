import { ReactNode, useEffect, useState } from 'react';
import { deepClone } from '@src/utils/utils';

import Context, { INIT_TAB_STATE } from './Context';

import type { ContextState } from './types';

type Props = {
  children: ReactNode;
  value: ContextState;
};

function Provider({ value, children }: Props) {
  const contextState = useState<ContextState>(deepClone(INIT_TAB_STATE));
  const [, setContextState] = contextState;

  useEffect(() => {
    setContextState(deepClone(value));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  return <Context.Provider value={contextState}>{children}</Context.Provider>;
}

export default Provider;
