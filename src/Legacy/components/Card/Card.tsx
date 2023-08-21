import React from 'react';
import Styled from './styled';

import type { OVER_RIDABLE_PROPS } from '@src/types/types';

type BaseProps = {
  children?: React.ReactNode;
  width?: number;
  height?: number;
};

type Props<T extends React.ElementType> = OVER_RIDABLE_PROPS<T, BaseProps>;

const DEFAULT_ELEMENT = 'div';

function Card<T extends React.ElementType = typeof DEFAULT_ELEMENT>(
  { children, width, height, as, ...props }: Props<T>,
  ref: React.Ref<any>,
) {
  const ELEMENT = as || DEFAULT_ELEMENT;

  return (
    <Styled.Container
      {...props}
      as={ELEMENT}
      ref={ref}
      width={width}
      height={height}
    >
      {children}
    </Styled.Container>
  );
}

type CardProps = Props<typeof DEFAULT_ELEMENT>;
export type { CardProps, BaseProps as CardBaseProps };
export default React.forwardRef(Card) as typeof Card;
