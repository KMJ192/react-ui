import { useContext } from 'react';
import Context from '../Context';

function useCheckboxState() {
  const context = useContext(Context);

  return context;
}

export default useCheckboxState;
