import { useContext } from 'react';
import Context from '../Context';

function useSetUIState() {
  const setState = useContext(Context)[1];

  return setState;
}

export default useSetUIState;
