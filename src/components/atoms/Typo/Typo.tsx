import React from 'react';

import type { OVER_RIDABLE_PROPS } from '@src/types/types';

import Styled, { ELEMENT } from './styled';

type BaseProps = {
  children?: React.ReactNode;
};

type Props<T extends React.ElementType> = OVER_RIDABLE_PROPS<T, BaseProps>;

function Typo<T extends React.ElementType = typeof ELEMENT>(
  { children, ...props }: Props<T>,
  ref: React.Ref<any>,
) {
  return (
    <Styled.Typo {...props} ref={ref}>
      {children}
    </Styled.Typo>
  );
}

export type { BaseProps as TypoProps };
export default React.forwardRef(Typo) as typeof Typo;
