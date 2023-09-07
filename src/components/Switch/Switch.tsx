import React from 'react';

import Flex from '@src/layout/Flex/Flex';

import type { OVER_RIDABLE_PROPS } from '@src/types/types';

import classNames from 'classnames/bind';
import style from './style.module.scss';
const cx = classNames.bind(style);

type BaseProps = {
  children?: React.ReactNode;
  checked?: boolean;
  disabled?: boolean;
};

const DEFAULT_ELEMENT = 'div';

type Props<T extends React.ElementType> = OVER_RIDABLE_PROPS<T, BaseProps>;

function Switch<T extends React.ElementType = typeof DEFAULT_ELEMENT>(
  {
    as,
    children,
    checked = false,
    disabled = false,
    size = 'md',
    className,
    ...props
  }: Props<T>,
  ref: React.Ref<any>,
) {
  const ELEMENT = as || DEFAULT_ELEMENT;

  return (
    <Flex
      {...props}
      as={ELEMENT as any}
      ref={ref}
      className={cx(
        'switch',
        size,
        { checked },
        { disabled },
        children !== undefined && 'is-children',
        className,
      )}
    >
      <div className={cx('switch-body', { checked }, { disabled })}></div>
      <div className={cx('switch-bullet', { checked }, { disabled })}></div>
      <span className={cx('children', { checked }, { disabled })}>
        {children}
      </span>
    </Flex>
  );
}

export type SwitchProps = Props<typeof DEFAULT_ELEMENT>;
export default React.forwardRef(Switch) as typeof Switch;
