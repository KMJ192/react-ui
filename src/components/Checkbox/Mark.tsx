import React from 'react';

import type { COMBINE_ELEMENT_PROPS } from '@src/types/types';
import useCheckboxState from './store/hooks/useCheckboxState';

import classNames from 'classnames/bind';
import style from '@css/components/Checkbox/Mark/style.module.scss';
const cx = classNames.bind(style);

type BaseProps = {
  // ...
};

const DEFAULT_ELEMENT = 'svg';

type Props<T extends React.ElementType> = COMBINE_ELEMENT_PROPS<T, BaseProps>;

function Mark<T extends React.ElementType = typeof DEFAULT_ELEMENT>(
  { className, ...props }: Props<T>,
  ref: React.Ref<React.ElementRef<typeof DEFAULT_ELEMENT>>,
) {
  const ELEMENT = DEFAULT_ELEMENT;
  const [state] = useCheckboxState();
  const { checked, multiple, disabled } = state;

  return multiple ? (
    <ELEMENT
      {...props}
      ref={ref}
      className={cx('cb-mark', { checked }, { disabled }, className)}
      width='1em'
      height='1em'
      viewBox='0 0 12 12'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M3 6H9'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
      />
    </ELEMENT>
  ) : (
    <ELEMENT
      {...props}
      ref={ref}
      width='1em'
      height='1em'
      viewBox='0 0 16 16'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={cx('cb-mark', { checked }, { disabled }, className)}
    >
      <path
        d='M13.1562 4.71875L6.59375 11.2812L3.3125 8'
        stroke='currentColor'
        strokeWidth='1.8'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </ELEMENT>
  );
}

export type CheckboxMarkProps = Props<typeof DEFAULT_ELEMENT>;
export default React.forwardRef(Mark) as typeof Mark;
