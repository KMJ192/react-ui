import { forwardRef } from 'react';
import type { ReactNode, ElementType, Ref } from 'react';

import type { OVER_RIDABLE_PROPS } from '@src/types/types';

import classNames from 'classnames/bind';
import style from './Left.module.scss';
const cx = classNames.bind(style);

type BaseProps = {
  children?: ReactNode;
};

const ELEMENT = 'section';

type Props<T extends ElementType> = OVER_RIDABLE_PROPS<T, BaseProps>;

function Left<T extends ElementType = typeof ELEMENT>(
  { children, className, ...props }: Props<T>,
  ref: Ref<any>,
) {
  return (
    <ELEMENT {...props} ref={ref} className={cx('left', className)}>
      {children}
    </ELEMENT>
  );
}

export default forwardRef(Left) as typeof Left;
