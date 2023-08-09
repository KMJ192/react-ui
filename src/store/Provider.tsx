import { ReactNode, useEffect, useState } from 'react';
import cloneDeep from 'lodash/cloneDeep';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';

import Context from './Context';

import type { ContextState } from './types';

const cache = createCache({ key: 'css', prepend: true });
cache.compat = true;

type Props = {
  children: ReactNode;
  value: ContextState;
};

function Provider({ value, children }: Props) {
  const contextState = useState<ContextState>(cloneDeep(value));

  const { theme } = contextState[0];

  useEffect(() => {
    if (theme) {
      window.localStorage.setItem('theme', theme);
    }
  }, [theme]);

  return (
    <CacheProvider value={cache}>
      <Context.Provider value={contextState}>{children}</Context.Provider>;
    </CacheProvider>
  );
}

export default Provider;
