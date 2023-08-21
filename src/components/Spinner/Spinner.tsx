import React from 'react';

import type { COMBINE_ELEMENT_PROPS, SIZE } from '@src/types/types';

import classNames from 'classnames/bind';
import style from './style.module.scss';
const cx = classNames.bind(style);

type BaseProps = {
  type?: 'type-1' | 'type-2' | 'type-3';
  size?: SIZE;
};

const ELEMENT = 'div';

type Props<T extends React.ElementType> = COMBINE_ELEMENT_PROPS<T, BaseProps>;

function Spinner<T extends React.ElementType = typeof ELEMENT>(
  { className, type = 'type-1', size = 'md', ...props }: Props<T>,
  ref: React.Ref<any>,
) {
  return (
    <ELEMENT
      {...props}
      ref={ref}
      className={cx('spinner', type, size, className)}
    ></ELEMENT>
  );
}

export type SpinnerProps = Props<typeof ELEMENT>;
export default React.forwardRef(Spinner) as typeof Spinner;
