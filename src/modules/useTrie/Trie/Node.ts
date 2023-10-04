import { TrieData } from './types';

type TrieObject<T> = { [key: string]: TrieNode<T> };

class TrieNode<T = unknown> {
  public isWord: boolean;

  public info: Array<TrieData<T>> | null;

  public next: TrieObject<T>;

  constructor() {
    this.isWord = false;

    this.next = {};

    this.info = null;
  }
}

export type { TrieObject };
export { TrieNode };
