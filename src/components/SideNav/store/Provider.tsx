import { useState } from 'react';
import type { ReactNode } from 'react';
import { cloneDeep } from 'lodash';

import Context from './Context';
import type { SideNavState } from './types';

type Props = {
  value: SideNavState;
  children: ReactNode;
};

function SideNavProvider({ children, value }: Props) {
  const contextState = useState(cloneDeep(value));

  return <Context.Provider value={contextState}>{children}</Context.Provider>;
}

export default SideNavProvider;
