import { useEffect, useMemo } from 'react';

import { Trie, type TrieData } from './Trie';
import Hangul from './Trie/Hangul';

type Params<T = any> = {
  dictionary?: Array<TrieData<T>>;
  isBuild?: boolean;
  caseSensitive?: boolean;
};

/**
 * trie 생성
 * @param dictionary trie 생성 데이터
 * @param isBuild trie 생성 여부
 * @param caseSensitive 대소문자 구분 여부
 * @returns
 */
function useTrie<T = any>({
  dictionary = [],
  isBuild = true,
  caseSensitive = false,
}: Params<T>) {
  const trie = useMemo(() => new Trie<T>({ caseSensitive }), [caseSensitive]);

  const rebuild = ({
    dictionary = [],
    isBuild = true,
    caseSensitive: newCaseSensitive = caseSensitive,
  }: Params<T>) => {
    if (isBuild) {
      trie.initNode();
      trie.initParams({ caseSensitive: newCaseSensitive });
      dictionary.forEach((val: TrieData<T>) => {
        const extract = Hangul.make(val.content);
        trie.insert(extract, val);
      });
    }
  };

  useEffect(() => {
    if (isBuild && trie.isDiff(dictionary)) {
      trie.initNode();
      dictionary.forEach((val: TrieData<T>) => {
        const extract = Hangul.make(val.content);
        trie.insert(extract, val);
      });
    }
  }, [dictionary, isBuild, trie]);

  return {
    trie,
    rebuild,
  };
}

export type { Params as UseTrieParams };
export default useTrie;
