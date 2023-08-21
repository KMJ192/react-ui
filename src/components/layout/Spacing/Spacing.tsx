import React from 'react';

import type { OVER_RIDABLE_PROPS } from '@src/types/types';

import classNames from 'classnames/bind';
import style from './style.module.scss';
const cx = classNames.bind(style);

type BaseProps = {
  direction?: 'horizontal' | 'vertical';
};

const DEFAULT_ELEMENT = 'div';

type Props<T extends React.ElementType> = OVER_RIDABLE_PROPS<T, BaseProps>;

function Spacing<T extends React.ElementType = typeof DEFAULT_ELEMENT>(
  { as, direction = 'vertical', className, ...props }: Props<T>,
  ref: React.Ref<any>,
) {
  const ELEMENT = as || DEFAULT_ELEMENT;

  return (
    <ELEMENT
      {...props}
      ref={ref}
      direction={direction}
      className={cx('spacing', direction, className)}
    />
  );
}

export type SpacingProps = Props<typeof DEFAULT_ELEMENT>;
export default React.forwardRef(Spacing) as typeof Spacing;
