import { useRef, useEffect, useState } from 'react';
import { useDebounce } from '@cdkit/react-modules';

import type { TabDirection, Offset, TabOption, Size } from '../types';

type Props = {
  selected: number;
  options: Array<TabOption>;
  direction: TabDirection;
};

type TabLinePosition = Size & Offset;

function useSelectTab({ selected, options, direction }: Props) {
  const optionsRef = useRef<HTMLDivElement>(null);
  const tabLineRef = useRef<HTMLDivElement>(null);
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
  });

  const resize = useDebounce(() => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  }, 300);

  useEffect(() => {
    if (selected < 0 || options.length - 1 < selected) {
      return;
    }
    const getSizeInfo = (): Array<TabLinePosition> => {
      if (optionsRef.current) {
        const options = optionsRef.current;
        const info = [];
        const len = options.children.length;
        let left = 0;
        let top = 0;
        for (let i = 0; i < len; i++) {
          const option = options.children[i];
          const { width, height } = option.getBoundingClientRect();
          info[i] = {
            width,
            height,
            left,
            top,
          };
          left += width;
          top += height;
        }

        return info;
      }
      return [];
    };

    const sizeInfo = getSizeInfo();

    if (sizeInfo.length > 0 && tabLineRef.current) {
      const tabLine = tabLineRef.current;
      if (direction === 'horizontal') {
        const { left } = sizeInfo[selected];
        const { width } = sizeInfo[selected];
        tabLine.style.left = `${left}px`;
        tabLine.style.width = `${width}px`;
        tabLine.style.top = ``;
        tabLine.style.height = ``;
      } else if (direction === 'vertical') {
        const { top } = sizeInfo[selected];
        const { height } = sizeInfo[selected];
        tabLine.style.top = `${top}px`;
        tabLine.style.height = `${height}px`;
        tabLine.style.left = ``;
        tabLine.style.width = ``;
      }
    }
  }, [options.length, selected, direction, windowSize]);

  useEffect(() => {
    window.addEventListener('resize', resize);
    return () => {
      window.removeEventListener('resize', resize);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    optionsRef,
    tabLineRef,
  };
}

export default useSelectTab;
