import React from 'react';

import Styled from './styled';

import type { OVER_RIDABLE_PROPS } from '@src/types/types';

type BaseProps = {
  children?: React.ReactNode;
};

const DEFAULT_ELEMENT = 'div';

type Props<T extends React.ElementType> = OVER_RIDABLE_PROPS<T, BaseProps>;

function Row<T extends React.ElementType = typeof DEFAULT_ELEMENT>(
  { as, children, className, ...props }: Props<T>,
  ref: React.Ref<any>,
) {
  const ELEMENT = as || DEFAULT_ELEMENT;

  return (
    <Styled.Container {...props} ref={ref} as={ELEMENT} className={className}>
      {children}
    </Styled.Container>
  );
}

export type RowProps = Props<typeof DEFAULT_ELEMENT>;
export default React.forwardRef(Row) as typeof Row;
