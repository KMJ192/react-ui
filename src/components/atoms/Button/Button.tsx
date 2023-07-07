import React from 'react';

import { Switch, Case, Default } from '@src/components/IfComponents/SwitchCase';
import { When } from '@src/components/IfComponents/WhenUnless';

import type { COMBINE_ELEMENT_PROPS } from '@src/types/types';

import type { Variant } from './types';
import Spinner from '../Spinner/Spinner';

import classNames from 'classnames/bind';
import style from './style.module.scss';
const cx = classNames.bind(style);

type BaseProps = {
  children?: React.ReactNode;
  variant?: Variant;
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
      className={cx('button', variant, className)}
    >
      {leftIcon && <div className={cx('icon')}>{leftIcon}</div>}
      {children}
      {rightIcon && <div className={cx('icon')}>{rightIcon}</div>}
      <When condition={loading}>
        <Switch>
          <Case condition={loadingElement !== undefined}>{loadingElement}</Case>
          <Default>
            <Spinner className={cx('btn-spinner')} type='type-1' />
          </Default>
        </Switch>
      </When>
    </ELEMENT>
  );
}

export type ButtonProps = Props<typeof ELEMENT>;
export default React.forwardRef(Button) as typeof Button;
