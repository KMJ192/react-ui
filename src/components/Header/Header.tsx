import React from 'react';

import type { OVER_RIDABLE_PROPS } from '@src/types/types';

import Center from '@src/layout/Center/Center';

import classNames from 'classnames/bind';
import style from './style.module.scss';
const cx = classNames.bind(style);

type BaseProps = {
  children?: React.ReactNode;
};

const DEFAULT_ELEMENT = 'header';

type Props<T extends React.ElementType> = OVER_RIDABLE_PROPS<T, BaseProps>;

function Header<T extends React.ElementType = typeof DEFAULT_ELEMENT>(
  { as, children, className, ...props }: Props<T>,
  ref: React.Ref<any>,
) {
  const ELEMENT = as || DEFAULT_ELEMENT;

  return (
    <Center<any>
      {...props}
      ref={ref}
      as={ELEMENT}
      className={cx('header', className)}
      horizontal={false}
    >
      {children}
    </Center>
  );
}

export type HeaderProps = Props<typeof DEFAULT_ELEMENT>;
export default React.forwardRef(Header) as typeof Header;
