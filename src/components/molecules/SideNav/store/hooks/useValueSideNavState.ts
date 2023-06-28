import useSideNavState from './useSideNavState';
import type { SideNavState } from '../types';

function useValueSideNavState(): SideNavState {
  const [value] = useSideNavState();

  return value;
}

export default useValueSideNavState;
