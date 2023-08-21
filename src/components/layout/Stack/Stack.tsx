import React from 'react';

import Styled from './styled';

import type { OVER_RIDABLE_PROPS } from '@src/types/types';

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
      direction={direction}
      spacing={spacing}
      className={className}
    >
      {children}
    </Styled.Container>
  );
}

export type StackProps = Props<typeof DEFAULT_ELEMENT>;
export default React.forwardRef(Stack) as typeof Stack;
