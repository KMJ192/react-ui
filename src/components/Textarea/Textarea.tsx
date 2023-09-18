import React from 'react';

import type { COMBINE_ELEMENT_PROPS } from '@src/types/types';

import classNames from 'classnames/bind';
import style from './style.module.scss';
const cx = classNames.bind(style);

type BaseProps = {
  error?: boolean;
};

const ELEMENT = 'textarea';

type Props<T extends React.ElementType> = COMBINE_ELEMENT_PROPS<T, BaseProps>;

function Textarea<T extends React.ElementType = typeof ELEMENT>(
  { error = false, className, ...props }: Props<T>,
  ref: React.Ref<React.ElementRef<typeof ELEMENT>>,
) {
  return (
    <ELEMENT
      {...props}
      ref={ref}
      className={cx('textarea', { error }, className)}
    ></ELEMENT>
  );
}

export type TextareaProps = Props<typeof ELEMENT>;
export default React.forwardRef(Textarea) as typeof Textarea;
