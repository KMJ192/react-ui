import React from 'react';

import type { COMBINE_ELEMENT_PROPS } from '@src/types/types';

import classNames from 'classnames/bind';
import style from './style.module.scss';
const cx = classNames.bind(style);

type BaseProps = {
  type?: 'type-1' | 'type-2' | 'type-3';
  size?: number;
  borderWidth?: number;
};

const ELEMENT = 'div';

type Props<T extends React.ElementType> = COMBINE_ELEMENT_PROPS<T, BaseProps>;

function Spinner<T extends React.ElementType = typeof ELEMENT>(
  { className, type = 'type-1', size, borderWidth, style, ...props }: Props<T>,
  ref: React.Ref<any>,
) {
  const isStyle = typeof size === 'number' || typeof borderWidth === 'number';
  const _style = isStyle
    ? type === 'type-1' || type === 'type-2'
      ? {
          ...style,
          width: size,
          height: size,
          borderWidth,
        }
      : {
          ...style,
          fontSize: size,
        }
    : style;

  return (
    <ELEMENT
      {...props}
      ref={ref}
      style={_style}
      className={cx('spinner', type, className)}
    />
  );
}

export type SpinnerProps = Props<typeof ELEMENT>;
export default React.forwardRef(Spinner) as typeof Spinner;
