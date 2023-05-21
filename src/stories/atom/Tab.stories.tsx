import Tab from '@src/components/atoms/Tab/Tab';
import { useState } from 'react';

export default {
  title: 'UI/Atoms/Tab',
  component: Tab,
  parameters: {
    componentSubtitle: 'Tab',
  },
};

const options = [
  {
    contents: 'option1',
  },
  {
    contents: 'option2',
  },
  {
    contents: 'option3',
  },
];

export const hamburgerMenu = (): JSX.Element => {
  const [select, setSelect] = useState(0);

  const onSelect = (idx: number) => {
    setSelect(idx);
  };

  return <Tab options={options} onSelect={onSelect} select={select} />;
};
