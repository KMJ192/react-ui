import React from 'react';

import { When } from '@ssamssam/react-modules';

import Flex from '@src/layout/Flex/Flex';

import type { OVER_RIDABLE_PROPS, SIZE } from '@src/types/types';

import classNames from 'classnames/bind';
import style from './style.module.scss';
const cx = classNames.bind(style);

type BaseProps = {
  size?: SIZE;
  error?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
};

const DEFAULT_ELEMENT = 'input';

type Props<T extends React.ElementType> = OVER_RIDABLE_PROPS<T, BaseProps>;

function Input<T extends React.ElementType = typeof DEFAULT_ELEMENT>(
  {
    as,
    size = 'md',
    leftIcon,
    rightIcon,
    error,
    className,
    ...props
  }: Props<T>,
  ref: React.Ref<any>,
) {
  const ELEMENT = as || DEFAULT_ELEMENT;

  return (
    <Flex className={cx('container')}>
      <When condition={leftIcon !== undefined}>
        <div className={cx('icon', 'left', size)}>{leftIcon}</div>
      </When>
      <ELEMENT
        {...props}
        ref={ref}
        className={cx(
          'input',
          size,
          leftIcon !== undefined && 'left-icon',
          rightIcon !== undefined && 'right-icon',
          { error },
          className,
        )}
      ></ELEMENT>
      <When condition={rightIcon !== undefined}>
        <div className={cx('icon', 'right', size)}>{rightIcon}</div>
      </When>
    </Flex>
  );
}

export type InputProps = Props<typeof DEFAULT_ELEMENT>;
export default React.forwardRef(Input) as typeof Input;
