import React from 'react';

import { Switch, Case, Default } from '@ssamssam/react-modules';
import { When } from '@ssamssam/react-modules';

import Center from '@src/layout/Center/Center';
import Flex from '@src/layout/Flex/Flex';
import Spinner from '../Spinner/Spinner';

import type { COMBINE_ELEMENT_PROPS } from '@src/types/types';

import type { Shape, Variant } from './types';

import classNames from 'classnames/bind';
import style from './style.module.scss';
const cx = classNames.bind(style);

type BaseProps = {
  children?: React.ReactNode;
  variant?: Variant;
  shape?: Shape;
  loading?: boolean;
  loadingElement?: React.ReactNode;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
};

const ELEMENT = 'button';

type Props<T extends React.ElementType> = COMBINE_ELEMENT_PROPS<T, BaseProps>;

function Button<T extends React.ElementType = typeof ELEMENT>(
  {
    children,
    variant = 'primary',
    shape = 'rect',
    loading = false,
    loadingElement,
    className,
    leftIcon,
    rightIcon,
    disabled = false,
    ...props
  }: Props<T>,
  ref: React.Ref<any>,
) {
  return (
    <ELEMENT
      {...props}
      ref={ref}
      disabled={disabled || loading}
      className={cx('button', variant, shape, className)}
    >
      <Center className={cx('contents')}>
        {leftIcon && <Flex className={cx('icon')}>{leftIcon}</Flex>}
        {children}
        {rightIcon && <Flex className={cx('icon')}>{rightIcon}</Flex>}
        <When condition={loading}>
          <Switch>
            <Case condition={loadingElement !== undefined}>
              {loadingElement}
            </Case>
            <Default>
              <Spinner className={cx('btn-spinner')} type='type-1' />
            </Default>
          </Switch>
        </When>
      </Center>
    </ELEMENT>
  );
}

export type ButtonProps = Props<typeof ELEMENT>;
export default React.forwardRef(Button) as typeof Button;
