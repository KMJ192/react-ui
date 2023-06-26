import React from 'react';

import type { OVER_RIDABLE_PROPS, SIZE } from '@src/types/types';

import classNames from 'classnames/bind';
import style from './style.module.scss';
const cx = classNames.bind(style);

type BaseProps = {
  children?: React.ReactNode;
  checked?: boolean;
  disabled?: boolean;
  size?: SIZE;
};

const ELEMENT = 'div';

type Props<T extends React.ElementType> = OVER_RIDABLE_PROPS<T, BaseProps>;

function Radio<T extends React.ElementType = typeof ELEMENT>(
  {
    children,
    checked = false,
    disabled = false,
    size = 'md',
    className,
    ...props
  }: Props<T>,
  ref: React.Ref<any>,
) {
  return (
    <ELEMENT {...props} ref={ref} className={cx('radio', { disabled }, size)}>
      <div className={cx('mark', { checked }, { disabled }, className)}>
        <span className={cx('pupil', { checked }, { disabled })}></span>
      </div>
      <span className={cx('children', { disabled })}>{children}</span>
    </ELEMENT>
  );
}

export type RadioProps = Props<typeof ELEMENT>;
export default React.forwardRef(Radio) as typeof Radio;
