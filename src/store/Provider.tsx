import { ReactNode, useEffect, useState } from 'react';
import cloneDeep from 'lodash/cloneDeep';

import Context, { INIT_STATE } from './Context';

import type { ContextState } from './types';

type Props = {
  children: ReactNode;
  value?: ContextState;
};

function Provider({ value, children }: Props) {
  const contextState = useState<ContextState>(
    value ? cloneDeep(value) : cloneDeep(INIT_STATE),
  );

  const { theme } = contextState[0];

  useEffect(() => {
    if (theme) {
      window.localStorage.setItem('theme', theme);
    }
  }, [theme]);

  return <Context.Provider value={contextState}>{children}</Context.Provider>;
}

export default Provider;
