import React from 'react';

import type { OVER_RIDABLE_PROPS } from '@src/types/types';

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

function Switch<T extends React.ElementType = typeof DEFAULT_ELEMENT>(
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
    <ELEMENT
      {...props}
      ref={ref}
      className={cx(
        'switch',
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
    </ELEMENT>
  );
}

export type SwitchProps = Props<typeof DEFAULT_ELEMENT>;
export default React.forwardRef(Switch) as typeof Switch;
