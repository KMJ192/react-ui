import { RefObject, useEffect, useRef } from 'react';

type Params = {
  onClickAway?: () => void;
  elementRefs?: Array<RefObject<HTMLElement>>;
};

function useClickAway({ onClickAway = () => {}, elementRefs = [] }: Params) {
  const callback = useRef(onClickAway);

  const handleClickAway = (e: Event) => {
    let isContain = false;
    for (let i = 0; i < elementRefs.length; i++) {
      const element = elementRefs[i];
      if (element.current?.contains(e.target as Node)) {
        isContain = true;
        break;
      }
    }
    if (!isContain) {
      callback.current();
    }
  };

  useEffect(() => {
    callback.current = onClickAway;
  }, [onClickAway]);

  useEffect(() => {
    document.addEventListener('click', handleClickAway);
    return () => {
      document.removeEventListener('click', handleClickAway);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}

export default useClickAway;
