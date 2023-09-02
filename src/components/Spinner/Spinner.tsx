import React from 'react';

import type { OVER_RIDABLE_PROPS } from '@src/types/types';

import { getStyle } from './calcStyle';

import classNames from 'classnames/bind';
import style from './style.module.scss';
const cx = classNames.bind(style);

type BaseProps = {
  type?: 'type-1' | 'type-2' | 'type-3';
  size?: number;
  borderWidth?: number;
};

const DEFAULT_ELEMENT = 'div';

type Props<T extends React.ElementType> = OVER_RIDABLE_PROPS<T, BaseProps>;

function Spinner<T extends React.ElementType = typeof DEFAULT_ELEMENT>(
  {
    as,
    className,
    type = 'type-1',
    size,
    borderWidth,
    style,
    ...props
  }: Props<T>,
  ref: React.Ref<any>,
) {
  const ELEMENT = as || DEFAULT_ELEMENT;
  const curStyle = getStyle({
    size,
    borderWidth,
    style,
  });

  return (
    <ELEMENT
      {...props}
      ref={ref}
      style={curStyle}
      className={cx('spinner', type, className)}
    />
  );
}

export type SpinnerProps = Props<typeof DEFAULT_ELEMENT>;
export default React.forwardRef(Spinner) as typeof Spinner;
