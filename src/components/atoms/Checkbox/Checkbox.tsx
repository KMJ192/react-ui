import React from 'react';

import type { OVER_RIDABLE_PROPS } from '@src/types/types';

import Mark from './Mark';

import classNames from 'classnames/bind';
import style from './style.module.scss';
const cx = classNames.bind(style);

type BaseProps = {
  children?: React.ReactNode;
  checked?: boolean;
  multiple?: boolean;
  disabled?: boolean;
};

const ELEMENT = 'div';

type Props<T extends React.ElementType> = OVER_RIDABLE_PROPS<T, BaseProps>;

function Checkbox<T extends React.ElementType = typeof ELEMENT>(
  {
    children,
    checked = false,
    multiple = false,
    disabled = false,
    className,
    ...props
  }: Props<T>,
  ref: React.Ref<any>,
) {
  return (
    <ELEMENT
      {...props}
      ref={ref}
      className={cx('checkbox', { checked }, { disabled }, className)}
    >
      <Mark multiple={multiple} />
      {children}
    </ELEMENT>
  );
}

export type CheckboxProps = Props<typeof ELEMENT>;
export default React.forwardRef(Checkbox) as typeof Checkbox;
