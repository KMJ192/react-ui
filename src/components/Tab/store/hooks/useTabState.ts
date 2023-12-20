import { useContext } from 'react';
import Context from '../Context';

function useTabState() {
  const context = useContext(Context);

  return context;
}

export default useTabState;
