import React, { useEffect, useRef, useState } from 'react';

import type { OVER_RIDABLE_PROPS } from '@src/types/types';

import type { Option, Direction } from './types';

import classNames from 'classnames/bind';
import style from './style.module.scss';
const cx = classNames.bind(style);

type BaseProps = {
  options?: Array<Option>;
  direction?: Direction;
  select?: number;
  onSelect?: (idx: number) => void;
};

const ELEMENT = 'div';

type Props<T extends React.ElementType> = OVER_RIDABLE_PROPS<T, BaseProps>;

function Tab<T extends React.ElementType = typeof ELEMENT>(
  {
    select = 0,
    options = [],
    direction = 'horizontal',
    className,
    onSelect = () => {},
    ...props
  }: Props<T>,
  ref: React.Ref<any>,
) {
  const optionsRef = useRef<HTMLDivElement>(null);

  const [sizeInfo, setSizeInfo] = useState<{
    optionsInfo: {
      width: number;
      height: number;
    };
    optionInfo: Array<{
      width: number;
      height: number;
      left: number;
      top: number;
    }>;
  }>({
    optionsInfo: {
      width: 0,
      height: 0,
    },
    optionInfo: [],
  });
  const [tabLineStyle, setTabLineStyle] = useState<{
    width?: string;
    height?: string;
    top?: string;
    left?: string;
  }>({});

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
        const left = `${sizeInfo.optionInfo[select].left}px`;
        const width = `${sizeInfo.optionInfo[select].width}px`;
        setTabLineStyle({
          left,
          width,
        });
      } else if (direction === 'vertical') {
        const top = `${sizeInfo.optionInfo[select].top}px`;
        const height = `${sizeInfo.optionInfo[select].height}px`;
        setTabLineStyle({
          top,
          height,
        });
      }
    }
  }, [sizeInfo, select]);

  return (
    <ELEMENT {...props} ref={ref} className={cx('tab', className)}>
      <div
        className={cx(
          'tab-line',
          direction,
          select === 0 && 'first',
          select === options.length - 1 && 'last',
        )}
        style={tabLineStyle}
      ></div>
      <div className={cx('options', direction)} ref={optionsRef}>
        {options.map(({ contents, disabled }, idx: number) => {
          return (
            <span
              className={cx('option', disabled && 'disabled')}
              key={idx}
              onClick={() => {
                if (!disabled) {
                  onSelect(idx);
                }
              }}
            >
              {contents}
            </span>
          );
        })}
      </div>
    </ELEMENT>
  );
}

export type TabProps = Props<typeof ELEMENT>;
export default React.forwardRef(Tab) as typeof Tab;
