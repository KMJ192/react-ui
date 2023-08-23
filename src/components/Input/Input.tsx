import React from 'react';

import { When } from '@himideula/react-utils';

import Flex from '@src/layout/Flex/Flex';

import type { COMBINE_ELEMENT_PROPS, SIZE } from '@src/types/types';

import classNames from 'classnames/bind';
import style from './style.module.scss';
const cx = classNames.bind(style);

type BaseProps = {
  size?: SIZE;
  error?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
};

const ELEMENT = 'input';

type Props<T extends React.ElementType> = COMBINE_ELEMENT_PROPS<T, BaseProps>;

function Input<T extends React.ElementType = typeof ELEMENT>(
  { size = 'md', leftIcon, rightIcon, error, className, ...props }: Props<T>,
  ref: React.Ref<any>,
) {
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

export type InputProps = Props<typeof ELEMENT>;
export default React.forwardRef(Input) as typeof Input;
