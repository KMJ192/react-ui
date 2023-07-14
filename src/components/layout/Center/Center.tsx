import React from 'react';

import Styled from './styled';

import type { OVER_RIDABLE_PROPS } from '@src/types/types';

type BaseProps = {
  vertical?: boolean;
  horizontal?: boolean;
  children?: React.ReactNode;
};

const DEFAULT_ELEMENT = 'div';

type Props<T extends React.ElementType> = OVER_RIDABLE_PROPS<T, BaseProps>;

function Center<T extends React.ElementType = typeof DEFAULT_ELEMENT>(
  {
    as,
    vertical = true,
    horizontal = true,
    children,
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
      vertical={vertical}
      horizontal={horizontal}
      className={className}
    >
      {children}
    </Styled.Container>
  );
}

export type CenterProps = Props<typeof DEFAULT_ELEMENT>;
export default React.forwardRef(Center) as typeof Center;
