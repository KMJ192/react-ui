import React from 'react';

import type { OVER_RIDABLE_PROPS } from '@src/types/types';
import type { COLOR_SCHEME } from '@src/styles/color/color';

import Center from '@src/layout/Center/Center';

import classNames from 'classnames/bind';
import style from './style.module.scss';
const cx = classNames.bind(style);

type BaseProps = {
  children?: React.ReactNode;
  colorSchema?: COLOR_SCHEME;
};

const DEFAULT_ELEMENT = 'span';

type Props<T extends React.ElementType> = OVER_RIDABLE_PROPS<T, BaseProps>;

function Badge<T extends React.ElementType = typeof DEFAULT_ELEMENT>(
  { as, children, colorSchema = 'primary', className, ...props }: Props<T>,
  ref: React.Ref<any>,
) {
  const ELEMENT = as || DEFAULT_ELEMENT;

  return (
    <ELEMENT
      {...props}
      ref={ref}
      className={cx('badge', colorSchema, className)}
    >
      <Center>{children}</Center>
    </ELEMENT>
  );
}

export type BadgeProps = Props<typeof DEFAULT_ELEMENT>;
export default React.forwardRef(Badge) as typeof Badge;
