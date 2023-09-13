import React from 'react';

import Radio, { type RadioProps } from '../Radio/Radio';
import Flex from '@src/layout/Flex/Flex';

import type { OVER_RIDABLE_PROPS } from '@src/types/types';

import classNames from 'classnames/bind';
import style from './style.module.scss';
const cx = classNames.bind(style);

type Option = Pick<RadioProps, 'children' | 'disabled'> & {
  key: string | number;
};

type BaseProps = {
  options?: Array<Option>;
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
    options = [],
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
      {options.map(({ children, disabled }, idx) => {
        const isSelect = selected === idx;
        return (
          <Radio
            key={idx}
            checked={isSelect}
            disabled={disabled}
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

export type { Option as RadioGroupOption };
export type RadioGroupProps = Props<typeof DEFAULT_ELEMENT>;
export default React.forwardRef(RadioGroup) as typeof RadioGroup;
