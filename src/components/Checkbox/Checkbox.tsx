import React from 'react';

import Flex from '@src/layout/Flex/Flex';
import Mark from './Mark';

import type { OVER_RIDABLE_PROPS } from '@src/types/types';

import classNames from 'classnames/bind';
import style from './style.module.scss';
const cx = classNames.bind(style);

type BaseProps = {
  children?: React.ReactNode;
  checked?: boolean;
  multiple?: boolean;
  disabled?: boolean;
};

const DEFAULT_ELEMENT = 'div';

type Props<T extends React.ElementType> = OVER_RIDABLE_PROPS<T, BaseProps>;

function Checkbox<T extends React.ElementType = typeof DEFAULT_ELEMENT>(
  {
    as,
    children,
    checked = false,
    multiple = false,
    disabled = false,
    className,
    ...props
  }: Props<T>,
  ref: React.Ref<any>,
) {
  const ELEMENT = as || DEFAULT_ELEMENT;

  return (
    <Flex
      as={ELEMENT as any}
      {...props}
      ref={ref}
      className={cx(
        'checkbox',
        { disabled },
        children !== undefined && 'is-children',
        className,
      )}
    >
      <div className={cx('box', { checked }, { disabled })}>
        <Mark multiple={multiple} />
      </div>
      <span className={cx('children')}>{children}</span>
    </Flex>
  );
}

export type CheckboxProps = Props<typeof DEFAULT_ELEMENT>;
export default React.forwardRef(Checkbox) as typeof Checkbox;
