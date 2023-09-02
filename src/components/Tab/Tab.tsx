import React from 'react';

import Flex from '@src/layout/Flex/Flex';

import type { OVER_RIDABLE_PROPS } from '@src/types/types';

import type { TabOption, TabDirection, TabOptionKey } from './types';

import useSelectTab from './hooks/useSelectTab';

import classNames from 'classnames/bind';
import style from './style.module.scss';
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

  const { tabLineRef, optionsRef } = useSelectTab({
    selected,
    options,
    direction,
  });

  return (
    <ELEMENT {...props} ref={ref} className={cx('tab', className)}>
      <div
        ref={tabLineRef}
        className={cx(
          'tab-line',
          direction,
          selected === 0 && 'first',
          selected === options.length - 1 && 'last',
        )}
      />
      <Flex className={cx('options', direction)} ref={optionsRef}>
        {options.map(({ key, contents, disabled }, idx: number) => {
          return (
            <span
              className={cx('option', disabled && 'disabled')}
              key={key}
              onClick={() => {
                if (!disabled) {
                  onSelect(key, idx);
                }
              }}
            >
              {contents}
            </span>
          );
        })}
      </Flex>
    </ELEMENT>
  );
}

export type TabProps = Props<typeof DEFAULT_ELEMENT>;
export default React.forwardRef(Tab) as typeof Tab;
