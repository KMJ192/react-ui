import React from 'react';

import Center from '@src/layout/Center/Center';
import Flex from '@src/layout/Flex/Flex';

import type { COMBINE_ELEMENT_PROPS } from '@src/types/types';

import classNames from 'classnames/bind';
import style from './style.module.scss';
const cx = classNames.bind(style);

type BaseProps = {
  children?: React.ReactNode;
  checked?: boolean;
  disabled?: boolean;
  size?: number;
  pupilSize?: number;
};

const ELEMENT = 'div';

type Props<T extends React.ElementType> = COMBINE_ELEMENT_PROPS<T, BaseProps>;

function Radio<T extends React.ElementType = typeof ELEMENT>(
  {
    children,
    checked = false,
    disabled = false,
    size,
    pupilSize,
    className,
    ...props
  }: Props<T>,
  ref: React.Ref<any>,
) {
  const isSize = typeof size === 'number';
  const isPupilSize = typeof pupilSize === 'number';

  const markSize = isSize
    ? {
        width: size,
      }
    : undefined;
  const childrenSize = isSize
    ? {
        fontSize: size,
      }
    : undefined;
  const pupilSz = isPupilSize
    ? {
        width: pupilSize,
      }
    : undefined;

  return (
    <Flex {...props} ref={ref} className={cx('radio', { disabled }, className)}>
      <Center
        className={cx('mark', { checked }, { disabled })}
        style={markSize}
      >
        <div
          className={cx('pupil', { checked }, { disabled })}
          style={pupilSz}
        />
      </Center>
      <span className={cx('children', { disabled })} style={childrenSize}>
        {children}
      </span>
    </Flex>
  );
}

export type RadioProps = Props<typeof ELEMENT>;
export default React.forwardRef(Radio) as typeof Radio;
