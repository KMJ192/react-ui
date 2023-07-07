import React from 'react';

import type { OVER_RIDABLE_PROPS } from '@src/types/types';

import classNames from 'classnames/bind';
import style from './style.module.scss';
const cx = classNames.bind(style);

type BaseProps = {
  children?: React.ReactNode;
  direction?: 'row' | 'column';
  spacing?: number;
};

const DEFAULT_ELEMENT = 'div';

type Props<T extends React.ElementType> = OVER_RIDABLE_PROPS<T, BaseProps>;

function Stack<T extends React.ElementType = typeof DEFAULT_ELEMENT>(
  {
    as,
    children,
    direction = 'row',
    spacing = 8,
    style,
    className,
    ...props
  }: Props<T>,
  ref: React.Ref<any>,
) {
  const ELEMENT = as || DEFAULT_ELEMENT;
  const [_style, setStyle] = React.useState<React.CSSProperties>(style);

  React.useEffect(() => {
    if (direction === 'row') {
      setStyle({
        ...style,
        rowGap: `${spacing}px`,
      });
    } else {
      setStyle({
        ...style,
        columnGap: `${spacing}px`,
      });
    }
  }, [style, spacing, direction]);

  return (
    <ELEMENT
      {...props}
      ref={ref}
      style={_style}
      className={cx('stack', direction, className)}
    >
      {children}
    </ELEMENT>
  );
}

export type StackProps = Props<typeof DEFAULT_ELEMENT>;
export default React.forwardRef(Stack) as typeof Stack;
