import React from 'react';

import Center from '@src/layout/Center/Center';
import Flex from '@src/layout/Flex/Flex';

import type { OVER_RIDABLE_PROPS } from '@src/types/types';

import classNames from 'classnames/bind';
import style from './style.module.scss';
const cx = classNames.bind(style);

type BaseProps = {
  children?: React.ReactNode;
  checked?: boolean;
  disabled?: boolean;
};

const DEFAULT_ELEMENT = 'div';

type Props<T extends React.ElementType> = OVER_RIDABLE_PROPS<T, BaseProps>;

function Radio<T extends React.ElementType = typeof DEFAULT_ELEMENT>(
  {
    as,
    children,
    checked = false,
    disabled = false,
    className,
    ...props
  }: Props<T>,
  ref: React.Ref<any>,
) {
  const ELEMENT = as || DEFAULT_ELEMENT;

  return (
    <Flex
      {...props}
      ref={ref}
      as={ELEMENT as any}
      className={cx(
        'radio',
        { checked },
        { disabled },
        children !== undefined && 'is-children',
        className,
      )}
    >
      <Center className={cx('mark', { checked }, { disabled })}>
        <div className={cx('pupil', { checked }, { disabled })} />
      </Center>
      <span className={cx('children', { disabled })}>{children}</span>
    </Flex>
  );
}

export type RadioProps = Props<typeof DEFAULT_ELEMENT>;
export default React.forwardRef(Radio) as typeof Radio;
