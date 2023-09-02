import React, { useEffect, useState } from 'react';

import type { OVER_RIDABLE_PROPS } from '@src/types/types';

import useValueSideNavState from '../store/hooks/useValueSideNavState';

import classNames from 'classnames/bind';
import style from './style.module.scss';
const cx = classNames.bind(style);

type BaseProps = {
  show?: boolean;
  depth?: number;
  children?: React.ReactNode;
  style?: React.CSSProperties;
};

const DEFAULT_ELEMENT = 'div';

type Props<T extends React.ElementType> = OVER_RIDABLE_PROPS<T, BaseProps>;

function MenuGroup<T extends React.ElementType = typeof DEFAULT_ELEMENT>(
  {
    as,
    show = false,
    depth = 0,
    children,
    style,
    className,
    ...props
  }: Props<T>,
  ref: React.Ref<any>,
) {
  const ELEMENT = as || DEFAULT_ELEMENT;

  const { depthGap } = useValueSideNavState();

  const [_style, setStyle] = useState<React.CSSProperties>({
    ...style,
    marginLeft: `${depth * depthGap}px`,
  });

  useEffect(() => {
    setStyle({
      ...style,
      marginLeft: `${depth * depthGap}px`,
    });
  }, [depth, style, show]);

  return (
    <ELEMENT
      {...props}
      ref={ref}
      className={cx('nav-group', { show }, className)}
      style={_style}
    >
      <div className={cx('children', show ? 'show' : 'collapse')}>
        {children}
      </div>
    </ELEMENT>
  );
}

export type SideNavMenuGroupProps = Props<typeof DEFAULT_ELEMENT>;
export default React.forwardRef(MenuGroup) as typeof MenuGroup;
