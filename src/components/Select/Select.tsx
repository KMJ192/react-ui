import React from 'react';

import type { OVER_RIDABLE_PROPS } from '@src/types/types';

import Flex from '@src/layout/Flex/Flex';

import Provider from './store/Provider';
import Box from './Box/Box';
import InputBox from './InputBox/InputBox';
import Dropbox from './Dropbox/Dropbox';
import Option from './Option/Option';

import classNames from 'classnames/bind';
import style from './style.module.scss';
const cx = classNames.bind(style);

type BaseProps = {
  open?: boolean;
  disabled?: boolean;
  error?: boolean;
  children?: React.ReactNode;
};

const DEFAULT_ELEMENT = 'div';

type Props<T extends React.ElementType> = OVER_RIDABLE_PROPS<T, BaseProps>;

function S<T extends React.ElementType = typeof DEFAULT_ELEMENT>(
  {
    as,
    children,
    open = false,
    disabled = false,
    error = false,
    className,
    ...props
  }: Props<T>,
  ref: React.Ref<React.ElementRef<typeof DEFAULT_ELEMENT>>,
) {
  const ELEMENT = as || DEFAULT_ELEMENT;

  return (
    <Provider
      value={{
        open,
        disabled,
        error,
      }}
    >
      <Flex
        as={ELEMENT as any}
        {...props}
        ref={ref}
        className={cx('select', className)}
      >
        {children}
      </Flex>
    </Provider>
  );
}

const Select = Object.assign(React.forwardRef(S) as typeof S, {
  Box,
  InputBox,
  Option,
  Dropbox,
});

export type SelectProps = Props<typeof DEFAULT_ELEMENT>;
export default Select;
