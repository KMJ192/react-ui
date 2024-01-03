import React from 'react';

import type { OVER_RIDABLE_PROPS } from '@src/types/types';

import Context from './store/Context';
import Pending from './Pending/Pending';

import classNames from 'classnames/bind';
import style from '@css/components/ProgressBar/style.module.scss';
const cx = classNames.bind(style);

type BaseProps = {
  percent?: number;
  pending?: boolean;
  children?: React.ReactNode;
};

const DEFAULT_ELEMENT = 'div';

type Props<T extends React.ElementType> = OVER_RIDABLE_PROPS<T, BaseProps>;

function PB<T extends React.ElementType = typeof DEFAULT_ELEMENT>(
  { as, className, children, percent = 0, pending = false, ...props }: Props<T>,
  ref: React.Ref<React.ElementRef<typeof DEFAULT_ELEMENT>>,
) {
  const ELEMENT = as || DEFAULT_ELEMENT;

  return (
    <Context.Provider
      value={{
        pending,
        percent,
      }}
    >
      <ELEMENT {...props} ref={ref} className={cx('progress-bar', className)}>
        {children}
      </ELEMENT>
    </Context.Provider>
  );
}

const ProgressBar = Object.assign(React.forwardRef(PB) as typeof PB, {
  Pending,
});

export type ProgressBarProps = Props<typeof DEFAULT_ELEMENT>;
export default ProgressBar;
