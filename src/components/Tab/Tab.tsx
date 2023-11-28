import React from 'react';

import type { OVER_RIDABLE_PROPS } from '@src/types/types';

import type { TabOption, TabDirection, TabOptionKey } from './types';

import useSelectTab from './hooks/useSelectTab';

import classNames from 'classnames/bind';
import style from '@css/components/Tab/style.module.scss';
const cx = classNames.bind(style);

type BaseProps = {
  options?: Array<TabOption>;
  direction?: TabDirection;
  selected?: number;
  onSelect?: (key: TabOptionKey, idx: number) => void;
};

const DEFAULT_ELEMENT = 'div';

type Props<T extends React.ElementType> = OVER_RIDABLE_PROPS<T, BaseProps>;

function Tab<T extends React.ElementType = typeof DEFAULT_ELEMENT>(
  {
    as,
    selected = -1,
    options = [],
    direction = 'horizontal',
    className,
    onSelect = () => {},
    ...props
  }: Props<T>,
  ref: React.Ref<React.ElementRef<typeof DEFAULT_ELEMENT>>,
) {
  const ELEMENT = as || DEFAULT_ELEMENT;

  const { tabLineRef, optionsRef } = useSelectTab({
    selected,
    options,
    direction,
  });

  return (
    <ELEMENT {...props} ref={ref} className={cx('tab', className)}>
      {selected >= 0 && (
        <div
          ref={tabLineRef}
          className={cx(
            'tab-line',
            direction,
            selected === 0 && 'first',
            selected === options.length - 1 && 'last',
          )}
        />
      )}
      <div className={cx('options', direction)} ref={optionsRef}>
        {options.map(({ key, contents, disabled }, idx: number) => {
          return (
            <div
              className={cx('option', disabled && 'disabled')}
              key={key}
              onClick={(e: React.MouseEvent) => {
                e.stopPropagation();
                if (!disabled) {
                  onSelect(key, idx);
                }
              }}
            >
              {contents}
            </div>
          );
        })}
      </div>
    </ELEMENT>
  );
}

export type TabProps = Props<typeof DEFAULT_ELEMENT>;
export default React.forwardRef(Tab) as typeof Tab;
