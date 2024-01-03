import React from 'react';

import type { OVER_RIDABLE_PROPS } from '@src/types/types';

import Mark from './Mark/Mark';

import classNames from 'classnames/bind';
import style from '@css/components/Radio/style.module.scss';
import Context from './store/Context';
const cx = classNames.bind(style);

type BaseProps = {
  children?: React.ReactNode;
  checked?: boolean;
  disabled?: boolean;
};

const DEFAULT_ELEMENT = 'div';

type Props<T extends React.ElementType> = OVER_RIDABLE_PROPS<T, BaseProps>;

function R<T extends React.ElementType = typeof DEFAULT_ELEMENT>(
  {
    as,
    children,
    checked = false,
    disabled = false,
    className,
    ...props
  }: Props<T>,
  ref: React.Ref<React.ElementRef<typeof DEFAULT_ELEMENT>>,
) {
  const ELEMENT = as || DEFAULT_ELEMENT;

  return (
    <Context.Provider
      value={{
        checked,
        disabled,
      }}
    >
      <ELEMENT
        {...props}
        ref={ref}
        className={cx(
          'radio',
          { checked },
          { disabled },
          className,
          // children !== undefined && 'is-children',
        )}
      >
        {children}
        {/* <div className={cx('mark', { checked }, { disabled })}>
        <div className={cx('pupil', { checked }, { disabled })} />
      </div> */}
      </ELEMENT>
    </Context.Provider>
  );
}

const Radio = Object.assign(React.forwardRef(R) as typeof R, {
  Mark,
});

export type RadioProps = Props<typeof DEFAULT_ELEMENT>;
export default Radio;
