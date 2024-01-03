import React from 'react';

import type { OVER_RIDABLE_PROPS } from '@src/types/types';
import Spinner from '@src/components/Spinner/Spinner';

import classNames from 'classnames/bind';
import style from '@css/components/Button/style.module.scss';
const cx = classNames.bind(style);

type BaseProps = {
  children?: React.ReactNode;
};

const DEFAULT_ELEMENT = 'div';

type Props<T extends React.ElementType> = OVER_RIDABLE_PROPS<T, BaseProps>;

function LoadingSpinner<T extends React.ElementType = typeof DEFAULT_ELEMENT>(
  { as, children, className, ...props }: Props<T>,
  ref: React.Ref<React.ElementRef<typeof DEFAULT_ELEMENT>>,
) {
  const ELEMENT = as || DEFAULT_ELEMENT;

  if (!children) {
    return (
      <Spinner
        {...(props as any)}
        ref={ref}
        className={cx('btn-loading', className)}
      />
    );
  }

  return (
    <ELEMENT {...props} ref={ref} className={cx('btn-loading', className)}>
      {children}
    </ELEMENT>
  );
}

export type ButtonLoadingSpinnerProps = Props<typeof DEFAULT_ELEMENT>;
export default React.forwardRef(LoadingSpinner) as typeof LoadingSpinner;
