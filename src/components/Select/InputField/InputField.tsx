import React from 'react';
import { When } from '@cdkit/react-modules';

import type { COMBINE_ELEMENT_PROPS } from '@src/types/types';

import Input, { type InputProps } from '@src/components/Input/Input';
import ExpandIcon from '../ExpandIcon/ExpandIcon';

import useSelectState from '../store/hooks/useSelectState';

import classNames from 'classnames/bind';
import style from '@css/components/Select/style.module.scss';
const cx = classNames.bind(style);

type BaseProps = {
  expandIcon?: React.ReactNode;
};

const DEFAULT_ELEMENT = 'input';

type Props<T extends React.ElementType> = COMBINE_ELEMENT_PROPS<T, BaseProps>;

function InputField<T extends React.ElementType = typeof DEFAULT_ELEMENT>(
  { expandIcon, className, ...props }: Props<T>,
  ref: React.Ref<React.ElementRef<typeof DEFAULT_ELEMENT>>,
) {
  const { open, error, disabled, placeholder } = useSelectState();

  return (
    <div className={cx('container')}>
      <Input
        ref={ref}
        {...(props as InputProps)}
        error={error}
        disabled={disabled}
        placeholder={placeholder}
        className={cx('input-field', { error }, { open }, className)}
      />
      <When condition={expandIcon !== null && expandIcon !== undefined}>
        {expandIcon}
      </When>
      <When condition={!expandIcon}>
        <ExpandIcon className={cx('icon', { open })} />
      </When>
    </div>
  );
}

export type SelectInputFieldProps = Props<typeof DEFAULT_ELEMENT>;
export default React.forwardRef(InputField) as typeof InputField;
