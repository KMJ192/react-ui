import type { ReactNode } from 'react';
import type { TrieData, TrieDataKey } from '@upcast/react-modules';

type SelectOptionKey = TrieDataKey;

type SelectOption = {
  key: SelectOptionKey;
  content: ReactNode;
  disabled?: boolean;
};

type InputSelectOption = TrieData<{
  disabled?: boolean;
}>;

export type { SelectOptionKey, SelectOption, InputSelectOption };
