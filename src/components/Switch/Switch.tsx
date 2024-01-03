import React from 'react';

import type { OVER_RIDABLE_PROPS } from '@src/types/types';

import Context from './store/Context';

import Bullet from './Bullet/Bullet';

import classNames from 'classnames/bind';
import style from '@css/components/Switch/style.module.scss';
const cx = classNames.bind(style);

type BaseProps = {
  children?: React.ReactNode;
  checked?: boolean;
  disabled?: boolean;
};

const DEFAULT_ELEMENT = 'div';

type Props<T extends React.ElementType> = OVER_RIDABLE_PROPS<T, BaseProps>;

function S<T extends React.ElementType = typeof DEFAULT_ELEMENT>(
  {
    as,
    children,
    checked = false,
    disabled = false,
    className,
    ...props
  }: Props<T>,
  ref: React.Ref<React.ElementRef<typeof DEFAULT_ELEMENT>>,
) {
  const ELEMENT = as || DEFAULT_ELEMENT;

  return (
    <Context.Provider
      value={{
        checked,
        disabled,
      }}
    >
      <ELEMENT
        {...props}
        ref={ref}
        className={cx('switch', { checked }, { disabled }, className)}
      >
        {children}
      </ELEMENT>
    </Context.Provider>
  );
}

const Switch = Object.assign(React.forwardRef(S) as typeof S, {
  Bullet,
});

export type SwitchProps = Props<typeof DEFAULT_ELEMENT>;
export default Switch;
