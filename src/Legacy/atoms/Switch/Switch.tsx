import React from 'react';

import Flex from '@src/layout/Flex/Flex';

import type { COMBINE_ELEMENT_PROPS, SIZE } from '@src/types/types';

import classNames from 'classnames/bind';
import style from './style.module.scss';
const cx = classNames.bind(style);

type BaseProps = {
  children?: React.ReactNode;
  checked?: boolean;
  disabled?: boolean;
  size: SIZE;
};

const ELEMENT = 'div';

type Props<T extends React.ElementType> = COMBINE_ELEMENT_PROPS<T, BaseProps>;

function Switch<T extends React.ElementType = typeof ELEMENT>(
  {
    children,
    checked = false,
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
      className={cx('switch', size, { checked }, { disabled }, className)}
    >
      <div className={cx('switch-body', { checked }, { disabled })}></div>
      <div className={cx('switch-bullet', { checked }, { disabled })}></div>
      <span className={cx('children', { checked }, { disabled })}>
        {children}
      </span>
    </Flex>
  );
}

export type SwitchProps = Props<typeof ELEMENT>;
export default React.forwardRef(Switch) as typeof Switch;
