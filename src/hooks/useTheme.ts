import useValueUIState from '@src/store/hooks/useValueUIState';

import type { Theme } from '@src/types/types';

function useTheme(): {
  theme: Theme;
} {
  const { theme } = useValueUIState();

  return {
    theme,
  };
}

export default useTheme;
