import { useEffect, useRef, forwardRef } from 'react';
import type { ReactNode, Ref, ElementRef, RefObject } from 'react';

import type { OVER_RIDABLE_PROPS } from '@src/types/types';

import classNames from 'classnames/bind';
import style from './style.module.scss';
const cx = classNames.bind(style);

type BaseProps = {
  isObserve?: boolean;
  children?: ReactNode;
  isLoading?: boolean;
  loadingElement?: ReactNode;
  onLoad?: () => void;
};

const DEFAULT_ELEMENT = 'div';

type Props<T extends React.ElementType> = OVER_RIDABLE_PROPS<T, BaseProps>;

let loadCnt = 0;

function InfiniteScroll<T extends React.ElementType = typeof DEFAULT_ELEMENT>(
  {
    as,
    children,
    isLoading,
    loadingElement,
    isObserve = true,
    onLoad = () => {},
    className,
    ...props
  }: Props<T>,
  ref: Ref<ElementRef<typeof DEFAULT_ELEMENT>>,
) {
  const ELEMENT = as || DEFAULT_ELEMENT;

  const containerRef = useRef<HTMLDivElement>(null);
  const observingNodeRef = useRef<HTMLDivElement>(null);

  const load = () => {
    onLoad();
    loadCnt += 1;
  };

  useEffect(() => {
    if (isObserve) {
      const observer = new IntersectionObserver((entries) => {
        if (Array.isArray(entries) && entries[0].isIntersecting) {
          load();
        }
      });

      if (observingNodeRef.current) {
        observer.observe(observingNodeRef.current);
      }

      return () => {
        observer.disconnect();
      };
    }
    return () => {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loadCnt, isObserve]);

  useEffect(() => {
    if (!isLoading) return;
    let container = null;
    if (ref && (ref as RefObject<ElementRef<typeof DEFAULT_ELEMENT>>).current) {
      container = (ref as RefObject<ElementRef<typeof DEFAULT_ELEMENT>>)
        .current;
    } else if (containerRef.current) {
      container = containerRef.current;
    }
    if (container) {
      container.scrollTo({
        behavior: 'smooth',
        top: container.scrollHeight,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loadCnt, isLoading]);

  return (
    <ELEMENT
      {...props}
      ref={ref ?? containerRef}
      className={cx('container', className)}
    >
      {children}
      <div ref={observingNodeRef} className={cx('loader')}>
        {isLoading && loadingElement}
      </div>
    </ELEMENT>
  );
}

export type InfiniteScrollProps = Props<typeof DEFAULT_ELEMENT>;
export default forwardRef(InfiniteScroll) as typeof InfiniteScroll;
