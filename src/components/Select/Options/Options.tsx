import React, { type RefObject, useEffect, useRef } from 'react';

import type { OVER_RIDABLE_PROPS } from '@src/types/types';

import useSelectState from '../store/hooks/useSelectState';

import classNames from 'classnames/bind';
import style from '@css/components/Select/style.module.scss';
const cx = classNames.bind(style);

type BaseProps = {
  children?: React.ReactNode;
};

const DEFAULT_ELEMENT = 'ul';

type Props<T extends React.ElementType> = OVER_RIDABLE_PROPS<T, BaseProps>;

function Options<T extends React.ElementType = typeof DEFAULT_ELEMENT>(
  { as, children, className, ...props }: Props<T>,
  ref: React.Ref<React.ElementRef<typeof DEFAULT_ELEMENT>>,
) {
  const ELEMENT = as || DEFAULT_ELEMENT;

  const dropboxRef = useRef<React.ElementRef<typeof DEFAULT_ELEMENT>>(null);
  const dropboxHeight = useRef<number>(0);
  const { open, direction, selectBBox } = useSelectState();

  useEffect(() => {
    let dropbox = null;
    if (
      ref &&
      (ref as RefObject<React.ElementRef<typeof DEFAULT_ELEMENT>>).current
    ) {
      dropbox = (ref as RefObject<React.ElementRef<typeof DEFAULT_ELEMENT>>)
        .current;
    } else if (dropboxRef) {
      dropbox = dropboxRef.current;
    }
    if (dropbox) {
      const { offsetHeight } = dropbox;
      dropboxHeight.current = offsetHeight;
      dropbox.style.width = `${selectBBox.width}px`;
      dropbox.style.left = `${selectBBox.left}px`;
      dropbox.style.top = `${
        direction === 'down'
          ? selectBBox.top + selectBBox.height + 8
          : selectBBox.top - dropboxHeight.current - 8
      }px`;
    }
  }, [
    direction,
    ref,
    selectBBox.height,
    selectBBox.left,
    selectBBox.top,
    selectBBox.width,
  ]);

  return (
    <ELEMENT
      {...props}
      ref={ref ?? dropboxRef}
      className={cx('select-options', direction, { open }, className)}
    >
      {children}
    </ELEMENT>
  );
}

export type SelectOptionsProps = Props<typeof DEFAULT_ELEMENT>;
export default React.forwardRef(Options) as typeof Options;
