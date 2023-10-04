type TrieDataKey = string | number;

type TrieData<T = unknown> = {
  key: TrieDataKey;
  content: string;
  index: number;
} & T;

type ITrie<T> = {
  insert: (inputStr: string, word: TrieData<T>) => void;
  initNode: () => void;
  initParams: () => void;
  startPrefixList: (prefix: string) => Array<TrieData<T>>;
  containList: (input: string) => Array<TrieData<T>>;
  isDiff: (newData: Array<TrieData<T>>) => boolean;
};

export type { ITrie, TrieData, TrieDataKey };
