import React from 'react';

import type { OVER_RIDABLE_PROPS } from '@src/types/types';

import classNames from 'classnames/bind';
import style from '@css/components/DataTable/style.module.scss';
const cx = classNames.bind(style);

type BaseProps = {
  children?: React.ReactNode;
  disabled?: boolean;
};

const DEFAULT_ELEMENT = 'tr';

type Props<T extends React.ElementType> = OVER_RIDABLE_PROPS<T, BaseProps>;

function Tr<T extends React.ElementType = typeof DEFAULT_ELEMENT>(
  { as, children, disabled = false, className, ...props }: Props<T>,
  ref: React.Ref<React.ElementRef<typeof DEFAULT_ELEMENT>>,
) {
  const ELEMENT = as || DEFAULT_ELEMENT;

  return (
    <ELEMENT {...props} ref={ref} className={cx('tr', { disabled }, className)}>
      {children}
    </ELEMENT>
  );
}

export type TrProps = Props<typeof DEFAULT_ELEMENT>;
export default React.forwardRef(Tr) as typeof Tr;
