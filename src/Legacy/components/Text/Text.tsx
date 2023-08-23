import React from 'react';
import Styled from './styled';

import type { OVER_RIDABLE_PROPS } from '@src/types/types';
import type { Typo } from './types';

type BaseProps = {
  children?: React.ReactNode;
  typo?: Typo;
  ellipsis?: boolean;
};

type Props<T extends React.ElementType> = OVER_RIDABLE_PROPS<T, BaseProps>;

const DEFAULT_ELEMENT = 'div';

function Text<T extends React.ElementType = typeof DEFAULT_ELEMENT>(
  {
    children,
    as,
    typo = 'b1',
    ellipsis = false,
    className,
    ...props
  }: Props<T>,
  ref: React.Ref<any>,
) {
  const ELEMENT = as || DEFAULT_ELEMENT;

  return (
    <Styled.Container
      {...props}
      as={ELEMENT}
      ref={ref}
      className={className}
      typo={typo}
      ellipsis={ellipsis}
    >
      {children}
    </Styled.Container>
  );
}

type TextProps = Props<typeof DEFAULT_ELEMENT>;
export type { TextProps, BaseProps as TextBaseProps };
export default React.forwardRef(Text) as typeof Text;
