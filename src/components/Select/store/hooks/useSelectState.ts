import { useContext } from 'react';
import Context from '../Context';

function useSelectState() {
  const state = useContext(Context);

  return state;
}

export default useSelectState;
