import React from 'react';

import type { COMBINE_ELEMENT_PROPS } from '@src/types/types';

import Input, { type InputProps } from '@src/components/Input/Input';
import ExpandIcon from '../ExpandIcon/ExpandIcon';

import useSelectState from '../store/hooks/useSelectState';

import classNames from 'classnames/bind';
import style from './style.module.scss';
const cx = classNames.bind(style);

type BaseProps = {
  // ...
};

const DEFAULT_ELEMENT = 'input';

type Props<T extends React.ElementType> = COMBINE_ELEMENT_PROPS<T, BaseProps>;

function InputBox<T extends React.ElementType = typeof DEFAULT_ELEMENT>(
  { className, ...props }: Props<T>,
  ref: React.Ref<React.ElementRef<typeof DEFAULT_ELEMENT>>,
) {
  const { open, error, disabled } = useSelectState();

  return (
    <div className={cx('container')}>
      <Input
        ref={ref}
        {...(props as InputProps)}
        error={error}
        disabled={disabled}
        className={cx('input-box', { error }, { open }, className)}
      />
      <ExpandIcon className={cx('icon', { open })} />
    </div>
  );
}

export type SelectInputBoxProps = Props<typeof DEFAULT_ELEMENT>;
export default React.forwardRef(InputBox) as typeof InputBox;
