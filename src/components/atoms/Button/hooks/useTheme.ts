import useValueUIState from '@src/store/hooks/useValueUIState';

import type { ButtonTheme } from '@src/store/theme';

function useTheme(): ButtonTheme {
  const { theme, themeSet } = useValueUIState();
  const colorSet: ButtonTheme = themeSet[theme].button;

  return colorSet;
}

export default useTheme;
