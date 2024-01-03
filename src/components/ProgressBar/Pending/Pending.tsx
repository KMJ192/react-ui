import React, { useContext } from 'react';

import type { OVER_RIDABLE_PROPS } from '@src/types/types';
import Context from '../store/Context';

import classNames from 'classnames/bind';
import style from '@css/components/ProgressBar/Pending/style.module.scss';
const cx = classNames.bind(style);

type BaseProps = {
  // ...
};

const DEFAULT_ELEMENT = 'div';

type Props<T extends React.ElementType> = OVER_RIDABLE_PROPS<T, BaseProps>;

function Pending<T extends React.ElementType = typeof DEFAULT_ELEMENT>(
  { as, className, ...props }: Props<T>,
  ref: React.Ref<React.ElementRef<typeof DEFAULT_ELEMENT>>,
) {
  const ELEMENT = as || DEFAULT_ELEMENT;
  const { pending, percent } = useContext(Context);
  const width = (() => {
    if (typeof percent !== 'number') return `${0}%`;
    if (percent > 100) return `${100}%`;
    if (percent < 0) return `${0}%`;
    return `${percent}%`;
  })();

  return (
    <ELEMENT
      {...props}
      ref={ref}
      style={{
        width,
      }}
      className={cx('pending-bar', !pending && 'exit', className)}
    >
      {pending && <div className={cx('mark')}></div>}
    </ELEMENT>
  );
}

export type PendingProps = Props<typeof DEFAULT_ELEMENT>;
export default React.forwardRef(Pending) as typeof Pending;
