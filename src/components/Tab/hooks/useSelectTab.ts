import { useEffect, useState } from 'react';
import { useDebounce } from '@cdkit/react-modules';
import type { Offset, Size, TabDirection } from '../types';

type MarkPosition = Size & Offset;

function useSelectTab() {
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

  const setPositionInfo = (
    options: HTMLDivElement,
    direction: TabDirection,
  ) => {
    const sizeInfo: Array<MarkPosition> = [];
    const len = options.children.length;
    let left = 0;
    let top = 0;
    if (direction === 'horizontal') {
      top = options.getBoundingClientRect().height;
    }
    for (let i = 0; i < len; i++) {
      const option = options.children[i];
      const { width, height } = option.getBoundingClientRect();
      sizeInfo[i] = {
        width,
        height,
        left,
        top,
      };
      left += width;
      if (direction === 'vertical') {
        top += height;
      }
    }

    return sizeInfo;
  };

  const setMark = (
    optionsElement: HTMLDivElement,
    markElement: HTMLDivElement,
    selected: number,
    direction: TabDirection,
  ) => {
    const optionLen = optionsElement.children.length;
    if (selected < 0 || optionLen - 1 < selected) {
      return;
    }

    const positionInfo = setPositionInfo(optionsElement, direction);

    if (positionInfo.length > 0) {
      const mark: HTMLDivElement = markElement;
      if (direction === 'horizontal') {
        const { left, width, top } = positionInfo[selected];
        mark.style.left = `${left}px`;
        mark.style.width = `${width}px`;
        mark.style.top = `calc(${top}px - 0.24rem)`;
        mark.style.height = `0.24rem`;
        if (selected === 0) {
          mark.style.borderBottomLeftRadius = '0.25rem';
          mark.style.borderBottomRightRadius = '0';
        } else if (selected === optionLen - 1) {
          mark.style.borderBottomRightRadius = '0.25rem';
          mark.style.borderBottomLeftRadius = '0';
        } else {
          mark.style.borderBottomLeftRadius = '0';
          mark.style.borderBottomRightRadius = '0';
        }
      } else if (direction === 'vertical') {
        const { top, height } = positionInfo[selected];
        mark.style.top = `${top}px`;
        mark.style.height = `${height}px`;
        mark.style.left = `0`;
        mark.style.width = `0.24rem`;
        if (selected === 0) {
          mark.style.borderTopLeftRadius = '0.25rem';
          mark.style.borderBottomLeftRadius = '0';
        } else if (selected === optionLen - 1) {
          mark.style.borderTopLeftRadius = '0';
          mark.style.borderBottomLeftRadius = '0.25rem';
        } else {
          mark.style.borderTopLeftRadius = '0';
          mark.style.borderBottomLeftRadius = '0';
        }
      }
    }
  };

  useEffect(() => {
    window.addEventListener('resize', resize);
    return () => {
      window.removeEventListener('resize', resize);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { windowSize, setMark };
}

export { MarkPosition as TabMarkPosition };
export default useSelectTab;
