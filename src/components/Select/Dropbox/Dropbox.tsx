import React from 'react';

import type { OVER_RIDABLE_PROPS } from '@src/types/types';

import Flex from '@src/layout/Flex/Flex';

import classNames from 'classnames/bind';
import style from './style.module.scss';
import useSelectState from '../store/hooks/useSelectState';
const cx = classNames.bind(style);

type BaseProps = {
  children?: React.ReactNode;
  direction?: 'down' | 'up';
};

const DEFAULT_ELEMENT = 'div';

type Props<T extends React.ElementType> = OVER_RIDABLE_PROPS<T, BaseProps>;

function Dropbox<T extends React.ElementType = typeof DEFAULT_ELEMENT>(
  { as, children, direction = 'down', className, ...props }: Props<T>,
  ref: React.Ref<React.ElementRef<typeof DEFAULT_ELEMENT>>,
) {
  const ELEMENT = as || DEFAULT_ELEMENT;
  const { open } = useSelectState();

  return (
    <Flex
      as={ELEMENT as any}
      {...props}
      ref={ref}
      className={cx('select-dropbox', direction, { open }, className)}
    >
      {children}
    </Flex>
  );
}

export type DropboxProps = Props<typeof DEFAULT_ELEMENT>;
export default React.forwardRef(Dropbox) as typeof Dropbox;
