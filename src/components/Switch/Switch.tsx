import React from 'react';

import Flex from '@src/layout/Flex/Flex';

import type { COMBINE_ELEMENT_PROPS } from '@src/types/types';

import classNames from 'classnames/bind';
import style from './style.module.scss';
const cx = classNames.bind(style);

type BaseProps = {
  children?: React.ReactNode;
  checked?: boolean;
  disabled?: boolean;
  width?: number;
  height?: number;
  bulletSize?: number;
};

const ELEMENT = 'div';

type Props<T extends React.ElementType> = COMBINE_ELEMENT_PROPS<T, BaseProps>;

function Switch<T extends React.ElementType = typeof ELEMENT>(
  {
    children,
    checked = false,
    disabled = false,
    size = 'md',
    className,
    width,
    height,
    bulletSize,
    ...props
  }: Props<T>,
  ref: React.Ref<any>,
) {
  const isSwitchSize = typeof width === 'number' || typeof height === 'number';
  const isBulletSize = typeof bulletSize === 'number';

  const switchSize = isSwitchSize
    ? {
        width,
        height,
      }
    : undefined;
  const bulletSz = isBulletSize
    ? {
        width: bulletSize,
        height: bulletSize,
      }
    : undefined;
  const fontSize =
    isSwitchSize && typeof height === 'number'
      ? {
          fontSize: height > 8 ? height - 8 : height,
        }
      : undefined;

  return (
    <Flex
      {...props}
      as={ELEMENT}
      ref={ref}
      className={cx('switch', size, { checked }, { disabled }, className)}
    >
      <div
        className={cx('switch-body', { checked }, { disabled })}
        style={switchSize}
      ></div>
      <div
        className={cx('switch-bullet', { checked }, { disabled })}
        style={bulletSz}
      ></div>
      <span
        className={cx('children', { checked }, { disabled })}
        style={fontSize}
      >
        {children}
      </span>
    </Flex>
  );
}

export type SwitchProps = Props<typeof ELEMENT>;
export default React.forwardRef(Switch) as typeof Switch;
