import React from 'react';

import type { OVER_RIDABLE_PROPS } from '@src/types/types';

import { getStyle } from './calcStyle';

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
  { as, direction = 'vertical', spacing, className, style, ...props }: Props<T>,
  ref: React.Ref<any>,
) {
  const ELEMENT = as || DEFAULT_ELEMENT;
  const curStyle = getStyle({
    direction,
    spacing,
    style,
  });

  return (
    <ELEMENT
      {...props}
      ref={ref}
      style={curStyle}
      className={cx('spacing', direction, className)}
    />
  );
}

export type SpacingProps = Props<typeof DEFAULT_ELEMENT>;
export default React.forwardRef(Spacing) as typeof Spacing;
