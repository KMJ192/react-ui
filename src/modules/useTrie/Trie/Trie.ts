import Hangul from './Hangul';

import { ITrie, TrieData } from './types';

import { TrieNode } from './Node';

const extractStr = (str: string) => {
  const cur = [];
  for (let i = 0; i < str.length; i++) {
    const c = str[i];
    if (Hangul.isHangul(c)) {
      const extract = Hangul.make(str[i]);
      cur.push(...extract.split(''));
    } else {
      cur.push(str[i]);
    }
  }

  return cur;
};

type Params = {
  caseSensitive?: boolean;
};

class Trie<T> implements ITrie<T> {
  private root: TrieNode<T>;

  private memo: string;

  private caseSensitive: boolean;

  constructor(params?: Params) {
    this.root = new TrieNode();

    this.memo = '';

    this.caseSensitive = params?.caseSensitive ?? false;
  }

  /**
   * trie 초기화
   */
  public initNode = (): void => {
    this.root = new TrieNode();
  };

  public initParams = (params?: Params): void => {
    this.caseSensitive = params?.caseSensitive ?? false;
  };

  /**
   * 문자열을 trie객체에 주입
   * @param inputStr 입력된 문자열
   * @param info trie의 info에 넣을 데이터
   */
  public insert = (inputStr: string, info: TrieData<T>): void => {
    let curNode: TrieNode<T> = this.root;

    for (let i = 0; i < inputStr.length; i++) {
      const c: string = inputStr[i];
      if (c !== ' ') {
        if (!curNode.next[c]) {
          curNode.next[c] = new TrieNode();
        }
        curNode = curNode.next[c];
      }
    }

    curNode.isWord = true;
    if (curNode.info === null) {
      curNode.info = [info];
    } else {
      curNode.info.push(info);
    }
  };

  /**
   * 접두어 기준 다음에 올 수 있는 모든 문자열 반환
   * @param prefix 접두어
   * @returns
   */
  public startPrefixList = (prefix: string): Array<TrieData<T>> => {
    let curNode: TrieNode<T> = this.root;
    const toPrefix: Array<TrieData<T>> = [];

    const findWords = (node: TrieNode<T>) => {
      if (node === undefined) return;
      if (node.isWord && node.info !== null) {
        toPrefix.push(...node.info);
      }
      Object.values(node.next).forEach((n: TrieNode<T>) => {
        findWords(n);
      });
    };

    const extract = extractStr(prefix);

    for (let i = 0; i < extract.length; i++) {
      curNode = curNode.next[extract[i]];
      if (curNode === undefined) break;
    }

    if (curNode) {
      findWords(curNode);
    }

    return toPrefix.sort((a, b) => a.index - b.index);
  };

  /**
   * 입력된 문자열이 포함된 모든 데이터 출력
   * @param input
   */
  public containList = (input: string): Array<TrieData<T>> => {
    if (!input || input.length === 0) return [];
    const containList: Array<TrieData<T>> = [];
    const extractInput = extractStr(input).join('');
    const lowerCaseExtractInput = extractInput.toLowerCase();

    const recursion = (node: TrieNode<T>) => {
      if (node === undefined) return;
      if (node.isWord && node.info) {
        node.info.forEach((val: TrieData<T>) => {
          const extract = extractStr(val.content).join('');
          if (
            this.caseSensitive &&
            extract.toLowerCase().includes(lowerCaseExtractInput)
          ) {
            containList.push(val);
            return;
          }
          if (extract.includes(extractInput)) {
            containList.push(val);
          }
        });
      }
      Object.values(node.next).forEach((n) => {
        recursion(n);
      });
    };

    recursion(this.root);

    return containList.sort((a, b) => a.index - b.index);
  };

  /**
   * trie memoization
   * 일치할 경우 false, 일치하지 않을 경우 true
   * @param {Array<TrieData<T>>} newData
   * @returns
   */
  public isDiff = (newData: Array<TrieData<T>>): boolean => {
    const compare = JSON.stringify(newData);

    const isChanged = this.memo !== compare;

    this.memo = compare;

    return isChanged;
  };

  /**
   * 생성된 trie ds getter
   */
  get madeTrie(): TrieNode<T> {
    return this.root;
  }
}

export default Trie;
