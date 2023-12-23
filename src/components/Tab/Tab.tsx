import React, { useEffect, useRef } from 'react';

import type { OVER_RIDABLE_PROPS } from '@src/types/types';

import type { TabDirection } from './types';

import Provider from './store/Provider';
import Mark from './Mark/Mark';
import Options from './Options/Options';
import Option from './Option/Option';

import useSelectTab from './hooks/useSelectTab';

import classNames from 'classnames/bind';
import style from '@css/components/Tab/style.module.scss';
const cx = classNames.bind(style);

type BaseProps = {
  children?: React.ReactNode;
  direction?: TabDirection;
  selected?: number;
};

const DEFAULT_ELEMENT = 'div';

type Props<T extends React.ElementType> = OVER_RIDABLE_PROPS<T, BaseProps>;

function T<T extends React.ElementType = typeof DEFAULT_ELEMENT>(
  {
    as,
    children,
    selected = -1,
    direction = 'horizontal',
    className,
    ...props
  }: Props<T>,
  ref: React.Ref<React.ElementRef<typeof DEFAULT_ELEMENT>>,
) {
  const ELEMENT = as || DEFAULT_ELEMENT;
  const containerRef = useRef<HTMLDivElement>(null);
  const { windowSize, setMark } = useSelectTab();

  const getElement = () => {
    const container =
      (ref as React.RefObject<HTMLDivElement>)?.current ?? containerRef.current;

    let optionsElement = null;
    let markElement = null;

    if (!container) {
      return {
        container: null,
        optionsElement: null,
        markElement: null,
      };
    }

    React.Children.forEach(children, (child: React.ReactNode, idx) => {
      if (!React.isValidElement(child)) {
        return;
      }
      if (child.type === Mark) {
        markElement = container.childNodes[idx] as HTMLDivElement;
      }
      if (child.type === Options) {
        optionsElement = container.childNodes[idx] as HTMLDivElement;
      }
    });

    return {
      container,
      optionsElement,
      markElement,
    };
  };

  useEffect(() => {
    const { optionsElement, markElement } = getElement();

    if (!optionsElement || !markElement) return;

    setMark(optionsElement, markElement, selected, direction);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selected, windowSize]);

  useEffect(() => {
    const { optionsElement, markElement } = getElement();

    if (!optionsElement || !markElement) return () => {};

    const id = requestAnimationFrame(() => {
      setMark(optionsElement, markElement, selected, direction);
    });

    return () => {
      cancelAnimationFrame(id);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [direction]);

  return (
    <Provider
      value={{
        direction,
      }}
    >
      <ELEMENT
        {...props}
        ref={ref ?? containerRef}
        className={cx('tab', className)}
      >
        {children}
      </ELEMENT>
    </Provider>
  );
}

const Tab = Object.assign(React.forwardRef(T) as typeof T, {
  Mark,
  Options,
  Option,
});

export type TabProps = Props<typeof DEFAULT_ELEMENT>;
export default Tab;
