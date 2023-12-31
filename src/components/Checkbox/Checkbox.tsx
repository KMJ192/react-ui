import React from 'react';

import Provider from './store/Provider';
import MarkField from './MarkField';
import Mark from './Mark';

import type { OVER_RIDABLE_PROPS } from '@src/types/types';

import classNames from 'classnames/bind';
import style from '@css/components/Checkbox/style.module.scss';
const cx = classNames.bind(style);

type BaseProps = {
  checked?: boolean;
  multiple?: boolean;
  disabled?: boolean;
  children?: React.ReactNode;
};

const DEFAULT_ELEMENT = 'div';

type Props<T extends React.ElementType> = OVER_RIDABLE_PROPS<T, BaseProps>;

function CB<T extends React.ElementType = typeof DEFAULT_ELEMENT>(
  {
    as,
    checked = false,
    multiple = false,
    disabled = false,
    children,
    className,
    ...props
  }: Props<T>,
  ref: React.Ref<React.ElementRef<typeof DEFAULT_ELEMENT>>,
) {
  const ELEMENT = as || DEFAULT_ELEMENT;

  return (
    <Provider
      value={{
        multiple,
        disabled,
        checked,
      }}
    >
      <ELEMENT
        {...props}
        ref={ref}
        className={cx('checkbox', { disabled }, className)}
      >
        {children}
      </ELEMENT>
    </Provider>
  );
}

const CheckBox = Object.assign(React.forwardRef(CB) as typeof CB, {
  MarkField,
  Mark,
});

export type CheckboxProps = Props<typeof DEFAULT_ELEMENT>;
export default CheckBox;
