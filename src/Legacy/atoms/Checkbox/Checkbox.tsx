import React from 'react';

import Flex from '@src/components/layout/Flex/Flex';

import Mark from './Mark';

import type { COMBINE_ELEMENT_PROPS, SIZE } from '@src/types/types';

import classNames from 'classnames/bind';
import style from './style.module.scss';
const cx = classNames.bind(style);

type BaseProps = {
  children?: React.ReactNode;
  checked?: boolean;
  multiple?: boolean;
  disabled?: boolean;
  size?: SIZE;
};

const ELEMENT = 'div';

type Props<T extends React.ElementType> = COMBINE_ELEMENT_PROPS<T, BaseProps>;

function Checkbox<T extends React.ElementType = typeof ELEMENT>(
  {
    children,
    checked = false,
    multiple = false,
    disabled = false,
    size = 'md',
    className,
    ...props
  }: Props<T>,
  ref: React.Ref<any>,
) {
  return (
    <Flex
      {...props}
      as={ELEMENT}
      ref={ref}
      className={cx('checkbox', { checked }, { disabled }, size, className)}
    >
      <Mark multiple={multiple} />
      {children}
    </Flex>
  );
}

export type CheckboxProps = Props<typeof ELEMENT>;
export default React.forwardRef(Checkbox) as typeof Checkbox;
