import React from 'react';

import type { OVER_RIDABLE_PROPS } from '@src/types/types';

import classNames from 'classnames/bind';
import style from './style.module.scss';
const cx = classNames.bind(style);

type BaseProps = {
  direction?: 'horizontal' | 'vertical';
  spacing?: number;
};

const DEFAULT_ELEMENT = 'div';

type Props<T extends React.ElementType> = OVER_RIDABLE_PROPS<T, BaseProps>;

function Spacing<T extends React.ElementType = typeof DEFAULT_ELEMENT>(
  {
    as,
    direction = 'vertical',
    spacing = 0,
    className,
    style,
    ...props
  }: Props<T>,
  ref: React.Ref<any>,
) {
  const ELEMENT = as || DEFAULT_ELEMENT;
  const isSpacing = typeof spacing === 'number';
  const _style = isSpacing
    ? direction === 'vertical'
      ? { ...style, height: spacing }
      : { ...style, width: spacing }
    : undefined;

  return (
    <ELEMENT
      {...props}
      ref={ref}
      direction={direction}
      style={_style}
      className={cx('spacing', direction, className)}
    />
  );
}

export type SpacingProps = Props<typeof DEFAULT_ELEMENT>;
export default React.forwardRef(Spacing) as typeof Spacing;
