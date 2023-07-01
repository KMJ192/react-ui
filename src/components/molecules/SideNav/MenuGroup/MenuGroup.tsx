import React, { Children, useEffect, useState } from 'react';

import type { OVER_RIDABLE_PROPS } from '@src/types/types';

import classNames from 'classnames/bind';
import style from './style.module.scss';
import useValueSideNavState from '../store/hooks/useValueSideNavState';
const cx = classNames.bind(style);

type BaseProps = {
  show?: boolean;
  depth?: number;
  children?: React.ReactNode;
  style?: React.CSSProperties;
};

const ELEMENT = 'div';

type Props<T extends React.ElementType> = OVER_RIDABLE_PROPS<T, BaseProps>;

function MenuGroup<T extends React.ElementType = typeof ELEMENT>(
  { show = false, depth = 0, children, style, className, ...props }: Props<T>,
  ref: React.Ref<any>,
) {
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

export type MenuGroupProps = Props<typeof ELEMENT>;
export default React.forwardRef(MenuGroup) as typeof MenuGroup;
