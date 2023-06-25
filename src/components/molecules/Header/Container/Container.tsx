import { forwardRef } from 'react';
import type { ReactNode, ElementType, Ref } from 'react';

import type { OVER_RIDABLE_PROPS } from '@src/types/types';

import classNames from 'classnames/bind';
import style from './Container.module.scss';
const cx = classNames.bind(style);

type BaseProps = {
  children?: ReactNode;
};

const ELEMENT = 'header';

type Props<T extends ElementType> = OVER_RIDABLE_PROPS<T, BaseProps>;

function Container<T extends ElementType = typeof ELEMENT>(
  { children, className, ...props }: Props<T>,
  ref: Ref<any>,
) {
  return (
    <ELEMENT {...props} ref={ref} className={cx('container', className)}>
      {children}
    </ELEMENT>
  );
}

export default forwardRef(Container) as typeof Container;
