import React, { type RefObject, useEffect, useRef } from 'react';

import type { OVER_RIDABLE_PROPS } from '@src/types/types';

import Flex from '@src/layout/Flex/Flex';
import useSelectState from '../store/hooks/useSelectState';

import GlobalPortal from '@src/utils/GlobalPortal';

import classNames from 'classnames/bind';
import style from './style.module.scss';
const cx = classNames.bind(style);

type BaseProps = {
  children?: React.ReactNode;
  direction?: 'down' | 'up';
};

const DEFAULT_ELEMENT = 'ul';

type Props<T extends React.ElementType> = OVER_RIDABLE_PROPS<T, BaseProps>;

function Dropbox<T extends React.ElementType = typeof DEFAULT_ELEMENT>(
  { as, children, direction = 'down', className, ...props }: Props<T>,
  ref: React.Ref<React.ElementRef<typeof DEFAULT_ELEMENT>>,
) {
  const ELEMENT = as || DEFAULT_ELEMENT;

  const dropboxRef = useRef<HTMLElement>(null);
  const dropboxHeight = useRef<number>(0);
  const { open, selectBBox, isOption } = useSelectState();

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
    <GlobalPortal>
      <Flex
        as={ELEMENT as any}
        {...props}
        ref={ref ?? dropboxRef}
        className={cx(
          'select-dropbox',
          direction,
          isOption && 'is-option',
          { open },
          className,
        )}
      >
        {children}
      </Flex>
    </GlobalPortal>
  );
}

export type SelectDropboxProps = Props<typeof DEFAULT_ELEMENT>;
export default React.forwardRef(Dropbox) as typeof Dropbox;
