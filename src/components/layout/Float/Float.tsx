import React from 'react';

import Styled from './styled';

import type { OVER_RIDABLE_PROPS } from '@src/types/types';

type BaseProps = {
  children?: React.ReactNode;
  startDirection?: 'lt' | 'rb';
  left?: number;
  right?: number;
  top?: number;
  bottom?: number;
};

const DEFAULT_ELEMENT = 'div';

type Props<T extends React.ElementType> = OVER_RIDABLE_PROPS<T, BaseProps>;

function Float<T extends React.ElementType = typeof DEFAULT_ELEMENT>(
  {
    as,
    children,
    startDirection = 'lt',
    left = 0,
    top = 0,
    right = 0,
    bottom = 0,
    className,
    ...props
  }: Props<T>,
  ref: React.Ref<any>,
) {
  const ELEMENT = as || DEFAULT_ELEMENT;

  return (
    <Styled.Container
      {...props}
      ref={ref}
      as={ELEMENT}
      className={className}
      startDirection={startDirection}
      left={left}
      top={top}
      right={right}
      bottom={bottom}
    >
      {children}
    </Styled.Container>
  );
}

export type FloatProps = Props<typeof DEFAULT_ELEMENT>;
export default React.forwardRef(Float) as typeof Float;
