import React from 'react';

import Radio, { type RadioProps } from '../Radio/Radio';
import Flex from '@src/layout/Flex/Flex';

import type { OVER_RIDABLE_PROPS } from '@src/types/types';

import classNames from 'classnames/bind';
import style from './style.module.scss';
const cx = classNames.bind(style);

type Group = Pick<RadioProps, 'children' | 'disabled' | 'size' | 'pupilSize'>;

type BaseProps = {
  group?: Array<Group>;
  direction?: 'horizontal' | 'vertical';
  selected?: number;
  onSelect?: (idx: number) => void;
};

const DEFAULT_ELEMENT = 'div';

type Props<T extends React.ElementType> = OVER_RIDABLE_PROPS<T, BaseProps>;

function RadioGroup<T extends React.ElementType = typeof DEFAULT_ELEMENT>(
  {
    as,
    className,
    selected = -1,
    group = [],
    direction = 'horizontal',
    onSelect = () => {},
    ...props
  }: Props<T>,
  ref: React.Ref<any>,
) {
  const ELEMENT = as || DEFAULT_ELEMENT;

  return (
    <Flex
      {...props}
      ref={ref}
      as={ELEMENT as any}
      className={cx('radio-group', direction, className)}
    >
      {group.map(({ children, disabled, size, pupilSize }, idx) => {
        const isSelect = selected === idx;
        return (
          <Radio
            checked={isSelect}
            disabled={disabled}
            size={size}
            pupilSize={pupilSize}
            onClick={(e: React.MouseEvent) => {
              e.stopPropagation();
              if (!disabled) {
                onSelect(idx);
              }
            }}
          >
            {children}
          </Radio>
        );
      })}
    </Flex>
  );
}

export type RadioGroupProps = Props<typeof DEFAULT_ELEMENT>;
export default React.forwardRef(RadioGroup) as typeof RadioGroup;
