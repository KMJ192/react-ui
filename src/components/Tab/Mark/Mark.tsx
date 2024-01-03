import React from 'react';

import type { OVER_RIDABLE_PROPS } from '@src/types/types';

import classNames from 'classnames/bind';
import style from '@css/components/Tab/style.module.scss';
const cx = classNames.bind(style);

type BaseProps = {
  // ...
};

const DEFAULT_ELEMENT = 'div';

type Props<T extends React.ElementType> = OVER_RIDABLE_PROPS<T, BaseProps>;

function Mark<T extends React.ElementType = typeof DEFAULT_ELEMENT>(
  { as, className, ...props }: Props<T>,
  ref: React.Ref<React.ElementRef<typeof DEFAULT_ELEMENT>>,
) {
  const ELEMENT = as || DEFAULT_ELEMENT;

  return (
    <ELEMENT
      {...props}
      ref={ref}
      className={cx('tab-mark', className)}
    ></ELEMENT>
  );
}

export type MarkProps = Props<typeof DEFAULT_ELEMENT>;
export default React.forwardRef(Mark) as typeof Mark;
