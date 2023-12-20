import React, { useRef } from 'react';

import type { OVER_RIDABLE_PROPS } from '@src/types/types';

import Option from '../Option/Option';
import useTabState from '../store/hooks/useTabState';

import classNames from 'classnames/bind';
import style from '@css/components/Tab/Options/style.module.scss';
const cx = classNames.bind(style);

type BaseProps = {
  children?: React.ReactNode;
};

const DEFAULT_ELEMENT = 'div';

type Props<T extends React.ElementType> = OVER_RIDABLE_PROPS<T, BaseProps>;

function OS<T extends React.ElementType = typeof DEFAULT_ELEMENT>(
  { as, children, className, ...props }: Props<T>,
  ref: React.Ref<React.ElementRef<typeof DEFAULT_ELEMENT>>,
) {
  const optionRef = useRef<HTMLDivElement>(null);
  const ELEMENT = as || DEFAULT_ELEMENT;
  const [tabState] = useTabState();

  return (
    <ELEMENT
      {...props}
      ref={ref ?? optionRef}
      className={cx('tab-options', tabState.direction, className)}
    >
      {children}
    </ELEMENT>
  );
}

const Options = Object.assign(React.forwardRef(OS) as typeof OS, {
  Option,
});

export type OptionsProps = Props<typeof DEFAULT_ELEMENT>;
export default Options;
