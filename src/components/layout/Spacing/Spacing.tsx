import React from 'react';

import Styled from './styled';

import type { COMBINE_ELEMENT_PROPS } from '@src/types/types';

type BaseProps = {
  direction?: 'horizontal' | 'vertical';
  size?: number;
};

const ELEMENT = 'div';

type Props<T extends React.ElementType> = COMBINE_ELEMENT_PROPS<T, BaseProps>;

function Spacing<T extends React.ElementType = typeof ELEMENT>(
  { direction = 'vertical', size = 0, className, ...props }: Props<T>,
  ref: React.Ref<any>,
) {
  return (
    <Styled.Container
      {...props}
      ref={ref}
      direction={direction}
      size={size}
      className={className}
    />
  );
}

export type SpacingProps = Props<typeof ELEMENT>;
export default React.forwardRef(Spacing) as typeof Spacing;
