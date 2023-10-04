import React from 'react';
import { When } from '@upcast/react-modules';

import type { OVER_RIDABLE_PROPS } from '@src/types/types';

import Center from '@src/layout/Center/Center';
import ExpandIcon from '../ExpandIcon/ExpandIcon';

import useSelectState from '../store/hooks/useSelectState';

import classNames from 'classnames/bind';
import style from './style.module.scss';
const cx = classNames.bind(style);

type BaseProps = {
  children?: React.ReactNode;
  placeholder?: string;
};

const DEFAULT_ELEMENT = 'div';

type Props<T extends React.ElementType> = OVER_RIDABLE_PROPS<T, BaseProps>;

function Box<T extends React.ElementType = typeof DEFAULT_ELEMENT>(
  { as, children, placeholder = '', className, ...props }: Props<T>,
  ref: React.Ref<React.ElementRef<typeof DEFAULT_ELEMENT>>,
) {
  const ELEMENT = as || DEFAULT_ELEMENT;

  const { open, error, disabled } = useSelectState();

  return (
    <Center
      as={ELEMENT as any}
      {...props}
      ref={ref}
      tabIndex={0}
      horizontal={false}
      className={cx('select-box', { open }, { disabled }, { error }, className)}
    >
      <When condition={children === undefined || children === ''}>
        <span className={cx('placeholder')}>{placeholder}</span>
      </When>
      <When condition={children !== undefined}>{children}</When>
      <ExpandIcon />
    </Center>
  );
}

export type SelectBoxProps = Props<typeof DEFAULT_ELEMENT>;
export default React.forwardRef(Box) as typeof Box;
