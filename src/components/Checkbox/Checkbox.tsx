import React from 'react';

import Flex from '@src/layout/Flex/Flex';

import Mark from './Mark';

import type { COMBINE_ELEMENT_PROPS } from '@src/types/types';

import classNames from 'classnames/bind';
import style from './style.module.scss';
const cx = classNames.bind(style);

type BaseProps = {
  children?: React.ReactNode;
  checked?: boolean;
  multiple?: boolean;
  disabled?: boolean;
  size?: number;
};

const ELEMENT = 'div';

type Props<T extends React.ElementType> = COMBINE_ELEMENT_PROPS<T, BaseProps>;

function Checkbox<T extends React.ElementType = typeof ELEMENT>(
  {
    children,
    checked = false,
    multiple = false,
    disabled = false,
    size,
    className,
    style,
    ...props
  }: Props<T>,
  ref: React.Ref<any>,
) {
  const isSize = typeof size === 'number';
  const _style: React.CSSProperties | undefined = isSize
    ? {
        ...style,
        width: size,
        height: size,
      }
    : style;

  return (
    <Flex
      {...props}
      as={ELEMENT}
      ref={ref}
      style={_style}
      className={cx('checkbox', { checked }, { disabled }, className)}
    >
      <Mark multiple={multiple} isSize={isSize} size={size} />
      {children}
    </Flex>
  );
}

export type CheckboxProps = Props<typeof ELEMENT>;
export default React.forwardRef(Checkbox) as typeof Checkbox;
