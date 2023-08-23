import { useContext } from 'react';
import Context from '../Context';

function useSideNavState() {
  const context = useContext(Context);

  return context;
}

export default useSideNavState;
