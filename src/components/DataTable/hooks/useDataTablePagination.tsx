import { useState } from 'react';

type Props = {
  lastPageIndex: number;
};

const perPage = 10;

function useDataTablePagination({ lastPageIndex }: Props) {
  const [selectedPageIndex, setSelectedPageIndex] = useState(1);
  const [currentPaging, setCurrentPaging] = useState(1);

  const onClickPaging = (move: 'prev' | 'next' | 'first' | 'last') => {
    if (move === 'prev') {
      const pCnt = currentPaging - 1;
      setSelectedPageIndex(pCnt * perPage);
      setCurrentPaging(pCnt);
    } else if (move === 'next') {
      const pCnt = currentPaging + 1;
      const nextPage = currentPaging * perPage + 1;
      setSelectedPageIndex(nextPage);
      setCurrentPaging(pCnt);
    } else if (move === 'first') {
      setSelectedPageIndex(1);
      setCurrentPaging(1);
    } else if (move === 'last') {
      const cur = Math.floor(lastPageIndex / perPage);
      const lastPaging = cur * perPage < lastPageIndex ? cur + 1 : cur;
      setSelectedPageIndex(lastPaging * perPage - (perPage - 1));
      setCurrentPaging(lastPaging);
    }
  };

  const onClickPageIndex = (idx: number) => {
    setSelectedPageIndex(idx);
  };

  return {
    lastPageIndex,
    currentPaging,
    selectedPageIndex,
    onClickPaging,
    onClickPageIndex,
  };
}

export default useDataTablePagination;
