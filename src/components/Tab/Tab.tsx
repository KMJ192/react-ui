import React from 'react';

import Flex from '@src/layout/Flex/Flex';
import Center from '@src/layout/Center/Center';

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
      <div
        ref={tabLineRef}
        className={cx(
          'tab-line',
          direction,
          selected === 0 && 'first',
          selected === options.length - 1 && 'last',
        )}
      />
      <Flex
        flexDirection={direction === 'vertical' ? 'column' : 'row'}
        className={cx('options')}
        ref={optionsRef}
      >
        {options.map(({ key, contents, disabled }, idx: number) => {
          return (
            <Center
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
            </Center>
          );
        })}
      </Flex>
    </ELEMENT>
  );
}

export type TabProps = Props<typeof DEFAULT_ELEMENT>;
export default React.forwardRef(Tab) as typeof Tab;
