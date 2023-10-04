import React from 'react';

import type { OVER_RIDABLE_PROPS } from '@src/types/types';

import classNames from 'classnames/bind';
import style from './style.module.scss';
const cx = classNames.bind(style);

type BaseProps = {
  children?: React.ReactNode;
  disabled?: boolean;
  selected?: boolean;
  reserved?: boolean;
};

const DEFAULT_ELEMENT = 'li';

type Props<T extends React.ElementType> = OVER_RIDABLE_PROPS<T, BaseProps>;

function Option<T extends React.ElementType = typeof DEFAULT_ELEMENT>(
  {
    as,
    children,
    disabled = false,
    selected = false,
    reserved = false,
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
        'select-option',
        { selected },
        { disabled },
        { reserved },
        className,
      )}
    >
      {children}
    </ELEMENT>
  );
}

export type SelectOptionProps = Props<typeof DEFAULT_ELEMENT>;
export default React.forwardRef(Option) as typeof Option;
