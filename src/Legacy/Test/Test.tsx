import React from 'react';
import Styled from './styled';

import type { OVER_RIDABLE_PROPS } from '@src/types/types';

type BaseProps = {
  children?: React.ReactNode;
};

type Props<T extends React.ElementType> = OVER_RIDABLE_PROPS<T, BaseProps>;

const DEFAULT_ELEMENT = 'div';

function Test<T extends React.ElementType = typeof DEFAULT_ELEMENT>(
  { children, as, className, ...props }: Props<T>,
  ref: React.Ref<any>,
) {
  const ELEMENT = as || DEFAULT_ELEMENT;

  return (
    <Styled.Container {...props} as={ELEMENT} ref={ref} className={className}>
      {children}
    </Styled.Container>
  );
}

type TestProps = Props<typeof DEFAULT_ELEMENT>;
export type { TestProps, BaseProps as TestBaseProps };
export default React.forwardRef(Test) as typeof Test;
