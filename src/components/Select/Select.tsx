import React, { type RefObject, useEffect, useRef, useState } from 'react';
import { useDebounce } from '@cdkit/react-modules';

import type { OVER_RIDABLE_PROPS } from '@src/types/types';

import Context from './store/Context';

import Field from './Field/Field';
import InputField from './InputField/InputField';
import Options from './Options/Options';
import Option from './Option/Option';

import classNames from 'classnames/bind';
import style from '@css/components/Select/style.module.scss';
const cx = classNames.bind(style);

type BaseProps = {
  open?: boolean;
  disabled?: boolean;
  error?: boolean;
  placeholder?: string;
  children?: React.ReactNode;
  direction?: 'up' | 'down';
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
    placeholder = '',
    direction = 'down',
    className,
    ...props
  }: Props<T>,
  ref: React.Ref<React.ElementRef<typeof DEFAULT_ELEMENT>>,
) {
  const ELEMENT = as || DEFAULT_ELEMENT;

  const mount = useRef<boolean>(false);
  const selectRef = useRef<React.ElementRef<typeof DEFAULT_ELEMENT>>(null);
  const [selectBBox, setSelectBBox] = useState({
    width: 0,
    height: 0,
    top: 0,
    left: 0,
  });

  const resizePosition = useDebounce((container: HTMLDivElement) => {
    const {
      offsetWidth: width,
      offsetHeight: height,
      offsetTop: top,
      offsetLeft: left,
    } = container;

    setSelectBBox({
      width,
      height,
      top,
      left,
    });
  }, 300);

  useEffect(() => {
    let container: HTMLDivElement | null = null;
    if (
      ref &&
      (ref as RefObject<React.ElementRef<typeof DEFAULT_ELEMENT>>).current
    ) {
      container = (ref as RefObject<React.ElementRef<typeof DEFAULT_ELEMENT>>)
        .current;
    } else if (selectRef.current) {
      container = selectRef.current;
    }
    if (container === null) return () => {};

    const {
      offsetWidth: width,
      offsetHeight: height,
      offsetTop: top,
      offsetLeft: left,
    } = container;

    setSelectBBox({
      width,
      height,
      top,
      left,
    });

    const resizeObserver = new ResizeObserver(() => {
      if (mount.current) resizePosition(container as HTMLDivElement);
      else mount.current = true;
    });

    const mutationObserver = new MutationObserver(() => {
      if (mount.current) resizePosition(container as HTMLDivElement);
      else mount.current = true;
    });

    resizeObserver.observe(container);
    mutationObserver.observe(container, {
      attributes: true,
      childList: false,
      subtree: false,
    });

    return () => {
      resizeObserver.disconnect();
      mutationObserver.disconnect();
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Context.Provider
      value={{
        placeholder,
        open,
        disabled,
        error,
        selectBBox,
        direction,
      }}
    >
      <ELEMENT
        {...props}
        ref={ref ?? selectRef}
        className={cx('select', className)}
      >
        {children}
      </ELEMENT>
    </Context.Provider>
  );
}

const Select = Object.assign(React.forwardRef(S) as typeof S, {
  Field,
  InputField,
  Option,
  Options,
});

export type SelectProps = Props<typeof DEFAULT_ELEMENT>;
export default Select;
