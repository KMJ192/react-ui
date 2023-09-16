import React from 'react';

import type { OVER_RIDABLE_PROPS } from '@src/types/types';
import type { Typo } from './types';

import classNames from 'classnames/bind';
import style from './style.module.scss';
const cx = classNames.bind(style);

type BaseProps = {
  children: React.ReactNode;
  typo?: Typo;
  ellipsis?: boolean;
};

const DEFAULT_ELEMENT = 'span';

type Props<T extends React.ElementType> = OVER_RIDABLE_PROPS<T, BaseProps>;

function Text<T extends React.ElementType = typeof DEFAULT_ELEMENT>(
  {
    as,
    children,
    typo = 'b1',
    ellipsis = false,
    className,
    ...props
  }: Props<T>,
  ref: React.Ref<React.ElementRef<typeof DEFAULT_ELEMENT>>,
) {
  const ELEMENT = as || DEFAULT_ELEMENT;

  return (
    <ELEMENT
      {...props}
      ref={ref}
      className={cx('typo', typo, ellipsis && 'ellipsis', className)}
    >
      {children}
    </ELEMENT>
  );
}

export type TextProps = Props<typeof DEFAULT_ELEMENT>;
export default React.forwardRef(Text) as typeof Text;
