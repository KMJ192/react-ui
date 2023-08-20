import React, { useEffect, useRef, useState } from 'react';
import Styled from './styled';

import type {
  Direction,
  Option,
  Size,
  Offset,
  TabLineStyle,
  OptionKey,
} from './types';

import type { OVER_RIDABLE_PROPS } from '@src/types/types';

type BaseProps = {
  options?: Option[];
  direction?: Direction;
  selected?: number;
  onSelect?: (idx: number, key: OptionKey) => void;
};

type Props<T extends React.ElementType> = OVER_RIDABLE_PROPS<T, BaseProps>;

const DEFAULT_ELEMENT = 'div';

function Tab<T extends React.ElementType = typeof DEFAULT_ELEMENT>(
  {
    as,
    selected = 0,
    options = [],
    direction = 'horizontal',
    className,
    onSelect = () => {},
    ...props
  }: Props<T>,
  ref: React.Ref<any>,
) {
  const ELEMENT = as || DEFAULT_ELEMENT;

  const optionsRef = useRef<HTMLUListElement>(null);

  const [sizeInfo, setSizeInfo] = useState<{
    optionsInfo: Size;
    optionInfo: (Offset & Size)[];
  }>({
    optionsInfo: {
      width: 0,
      height: 0,
    },
    optionInfo: [],
  });
  const [tabLineStyle, setTabLineStyle] = useState<TabLineStyle>({});

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
        const { left, width } = sizeInfo.optionInfo[selected];
        setTabLineStyle({
          left,
          width,
        });
      } else if (direction === 'vertical') {
        const { top, height } = sizeInfo.optionInfo[selected];
        setTabLineStyle({
          top,
          height,
        });
      }
    }
  }, [sizeInfo, selected, direction]);

  return (
    <Styled.Container {...props} as={ELEMENT} ref={ref} className={className}>
      <Styled.TabLine
        {...tabLineStyle}
        direction={direction}
        isFirst={selected === 0}
        isLast={selected === options.length - 1}
      />
      <Styled.Options direction={direction} ref={optionsRef}>
        {options.map(({ contents, disabled, key }, idx: number) => {
          return (
            <Styled.Option
              key={key}
              disabled={disabled}
              onClick={() => {
                if (!disabled) {
                  onSelect(idx, key);
                }
              }}
            >
              {contents}
            </Styled.Option>
          );
        })}
      </Styled.Options>
    </Styled.Container>
  );
}

type TabProps = Props<typeof DEFAULT_ELEMENT>;
export type { TabProps, BaseProps as TabBaseProps };
export default React.forwardRef(Tab) as typeof Tab;
