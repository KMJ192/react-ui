import React from 'react';

import type { OVER_RIDABLE_PROPS } from '@src/types/types';

import classNames from 'classnames/bind';
import style from './style.module.scss';
const cx = classNames.bind(style);

type BaseProps = {
  percent?: number;
  isPending?: boolean;
};

const ELEMENT = 'div';

type Props<T extends React.ElementType> = OVER_RIDABLE_PROPS<T, BaseProps>;

function Progressbar<T extends React.ElementType = typeof ELEMENT>(
  { className, percent = 0, isPending = false, ...props }: Props<T>,
  ref: React.Ref<any>,
) {
  return (
    <ELEMENT {...props} ref={ref} className={cx('progressbar', className)}>
      <div
        className={cx('bar')}
        style={{
          width: `${percent > 100 ? 100 : percent}%`,
        }}
      >
        {isPending && <div className={cx('pending')}></div>}
      </div>
    </ELEMENT>
  );
}

export type ProgressbarProps = Props<typeof ELEMENT>;
export default React.forwardRef(Progressbar) as typeof Progressbar;
