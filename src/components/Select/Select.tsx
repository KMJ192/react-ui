import React, { type RefObject, useEffect, useRef, useState } from 'react';

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
  isOption?: boolean;
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
    isOption = true,
    className,
    ...props
  }: Props<T>,
  ref: React.Ref<React.ElementRef<typeof DEFAULT_ELEMENT>>,
) {
  const ELEMENT = as || DEFAULT_ELEMENT;

  const selectRef = useRef<HTMLElement>(null);
  const [selectBBox, setSelectBBox] = useState({
    width: 0,
    height: 0,
    top: 0,
    left: 0,
  });

  useEffect(() => {
    const getPosition = () => {
      let container = null;
      if (
        ref &&
        (ref as RefObject<React.ElementRef<typeof DEFAULT_ELEMENT>>).current
      ) {
        container = (ref as RefObject<React.ElementRef<typeof DEFAULT_ELEMENT>>)
          .current;
      } else if (selectRef.current) {
        container = selectRef.current;
      }
      if (container) {
        const { width, height, top, left } = container.getBoundingClientRect();
        setSelectBBox({
          width,
          height,
          top,
          left,
        });
      }
    };
    getPosition();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Provider
      value={{
        open,
        disabled,
        error,
        selectBBox,
        isOption,
      }}
    >
      <Flex
        as={ELEMENT as any}
        {...props}
        ref={ref ?? selectRef}
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
