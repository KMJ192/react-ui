import { useRef, useState, useEffect } from 'react';
import { Direction, Offset, Option, Size } from '../types';

type Props = {
  selected: number;
  options: Array<Option>;
  direction: Direction;
};

type TabLinePosition = Size & Offset;

function useSelectTab({ selected, options, direction }: Props) {
  const optionsRef = useRef<HTMLDivElement>(null);

  const [sizeInfo, setSizeInfo] = useState<{
    optionsInfo: Size;
    optionInfo: Array<TabLinePosition>;
  }>({
    optionsInfo: {
      width: 0,
      height: 0,
    },
    optionInfo: [],
  });
  const [tabLineStyle, setTabLineStyle] = useState<Partial<TabLinePosition>>(
    {},
  );

  useEffect(() => {
    if (optionsRef.current) {
      const options = optionsRef.current;
      const info = [];
      const len = options.children.length;
      const { width: totalWidth, height: totalHeight } =
        options.getBoundingClientRect();
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

      setSizeInfo({
        optionsInfo: {
          width: totalWidth,
          height: totalHeight,
        },
        optionInfo: info,
      });
    }
  }, [options]);

  useEffect(() => {
    if (sizeInfo.optionInfo.length > 0) {
      if (direction === 'horizontal') {
        const { left } = sizeInfo.optionInfo[selected];
        const { width } = sizeInfo.optionInfo[selected];
        setTabLineStyle({
          left,
          width,
        });
      } else if (direction === 'vertical') {
        const { top } = sizeInfo.optionInfo[selected];
        const { height } = sizeInfo.optionInfo[selected];
        setTabLineStyle({
          top,
          height,
        });
      }
    }
  }, [sizeInfo, selected, direction]);

  return {
    optionsRef,
    tabLineStyle,
  };
}

export default useSelectTab;
