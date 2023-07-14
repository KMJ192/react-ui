import { useContext } from 'react';
import Context from '../Context';

function useValueUIState() {
  const value = useContext(Context)[0];

  return value;
}

export default useValueUIState;
