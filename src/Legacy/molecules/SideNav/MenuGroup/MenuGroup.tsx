import React, { useEffect, useState } from 'react';

import type { COMBINE_ELEMENT_PROPS } from '@src/types/types';

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

const ELEMENT = 'div';

type Props<T extends React.ElementType> = COMBINE_ELEMENT_PROPS<T, BaseProps>;

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

export type SideNavMenuGroupProps = Props<typeof ELEMENT>;
export default React.forwardRef(MenuGroup) as typeof MenuGroup;
