import { useState } from 'react';
import type { StoryFn, Meta } from '@storybook/react';

import {
  useTrie,
  type TrieData,
  type UseTrieParams,
} from '@src/modules/useTrie';

const meta: Meta<typeof useTrie> = {
  title: 'UI/Modules/useTrie',
  parameters: {
    componentSubtitle: 'useTrie',
  },
  argTypes: {},
};

const dictionary: Array<TrieData> = [
  {
    key: 0,
    content: 'app',
    index: 0,
  },
  {
    key: 1,
    content: 'apple',
    index: 1,
  },
  {
    key: 2,
    content: 'append',
    index: 2,
  },
  {
    key: 3,
    content: 'application',
    index: 3,
  },
  {
    key: 4,
    content: 'appear',
    index: 4,
  },
  {
    key: 5,
    content: '한글',
    index: 5,
  },
  {
    key: 6,
    content: '한자',
    index: 6,
  },
  {
    key: 7,
    content: '한글날',
    index: 7,
  },
  {
    key: 8,
    content: 'App',
    index: 8,
  },
];

const Template = (args: Required<UseTrieParams>) => {
  const { trie } = useTrie({
    dictionary: args.dictionary,
    isBuild: args.isBuild,
    caseSensitive: args.caseSensitive,
  });
  const [list, setList] = useState<Array<TrieData>>(args.dictionary);
  const [value, setValue] = useState('');

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setValue(value);
    if (value === '') {
      setList(args.dictionary);
      return;
    }
    setList(trie.containList(value));
  };

  return (
    <div>
      <input value={value} onChange={onChange} />
      <ul>
        {list.map(({ key, content }) => (
          <li key={key}>{content}</li>
        ))}
      </ul>
    </div>
  );
};

export const UseTrieStory: StoryFn<Required<UseTrieParams>> = Template.bind({});
UseTrieStory.args = {
  dictionary,
  isBuild: true,
  caseSensitive: true,
};

export default meta;
