import { Theme } from '@src/types/types';
import { atom } from 'recoil';

type GlobalAtom = {
  theme: Theme;
};

const globalAtom = atom<GlobalAtom>({
  key: '@recoil/global',
  default: {
    theme: 'light',
  },
});

export { globalAtom };
