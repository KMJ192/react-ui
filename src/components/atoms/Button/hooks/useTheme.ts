import useValueUIState from '@src/store/hooks/useValueUIState';

import type { Theme } from '@src/types/types';
import type { ButtonTheme } from '@src/store/theme';

function useTheme(): {
  theme: Theme;
  colorSet: ButtonTheme;
} {
  const { theme, themeSet } = useValueUIState();

  return {
    theme,
    colorSet: themeSet[theme].button,
  };
}

export default useTheme;
