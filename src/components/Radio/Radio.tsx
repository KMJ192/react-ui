import React from 'react';

import Center from '@src/layout/Center/Center';
import Flex from '@src/layout/Flex/Flex';

import type { COMBINE_ELEMENT_PROPS, SIZE } from '@src/types/types';

import classNames from 'classnames/bind';
import style from './style.module.scss';
const cx = classNames.bind(style);

type BaseProps = {
  children?: React.ReactNode;
  checked?: boolean;
  disabled?: boolean;
  size?: SIZE;
};

const ELEMENT = 'div';

type Props<T extends React.ElementType> = COMBINE_ELEMENT_PROPS<T, BaseProps>;

function Radio<T extends React.ElementType = typeof ELEMENT>(
  {
    children,
    checked = false,
    disabled = false,
    size = 'md',
    className,
    ...props
  }: Props<T>,
  ref: React.Ref<any>,
) {
  return (
    <Flex
      {...props}
      ref={ref}
      as={ELEMENT}
      className={cx('radio', { disabled }, size)}
    >
      <Center className={cx('mark', { checked }, { disabled }, className)}>
        <span className={cx('pupil', { checked }, { disabled })}></span>
      </Center>
      <span className={cx('children', { disabled })}>{children}</span>
    </Flex>
  );
}

export type RadioProps = Props<typeof ELEMENT>;
export default React.forwardRef(Radio) as typeof Radio;
