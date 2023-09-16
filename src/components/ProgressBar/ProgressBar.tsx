import React from 'react';

import type { OVER_RIDABLE_PROPS } from '@src/types/types';

import classNames from 'classnames/bind';
import style from './style.module.scss';
const cx = classNames.bind(style);

type BaseProps = {
  percent?: number;
  pending?: boolean;
};

const DEFAULT_ELEMENT = 'div';

type Props<T extends React.ElementType> = OVER_RIDABLE_PROPS<T, BaseProps>;

function ProgressBar<T extends React.ElementType = typeof DEFAULT_ELEMENT>(
  { as, className, percent = 0, pending = false, ...props }: Props<T>,
  ref: React.Ref<React.ElementRef<typeof DEFAULT_ELEMENT>>,
) {
  const ELEMENT = as || DEFAULT_ELEMENT;

  return (
    <ELEMENT {...props} ref={ref} className={cx('progress-bar', className)}>
      <div
        className={cx('bar', !pending && 'exit')}
        style={{
          width: `${percent > 100 ? 100 : percent}%`,
        }}
      >
        {pending && <div className={cx('pending')}></div>}
      </div>
    </ELEMENT>
  );
}

export type ProgressBarProps = Props<typeof DEFAULT_ELEMENT>;
export default React.forwardRef(ProgressBar) as typeof ProgressBar;
