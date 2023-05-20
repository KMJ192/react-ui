import { useContext } from 'react';
import Context from '../Context';

function useUIState() {
  const context = useContext(Context);

  return context;
}

export default useUIState;
