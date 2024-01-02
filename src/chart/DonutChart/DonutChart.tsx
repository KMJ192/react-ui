import React from 'react';

import type { COMBINE_ELEMENT_PROPS } from '@src/types/types';

type BaseProps = {
  children?: React.ReactNode;
};

const DEFAULT_ELEMENT = 'canvas';

type Props<T extends React.ElementType> = COMBINE_ELEMENT_PROPS<T, BaseProps>;

function Test<T extends React.ElementType = typeof DEFAULT_ELEMENT>(
  { children, className, ...props }: Props<T>,
  ref: React.Ref<React.ElementRef<typeof DEFAULT_ELEMENT>>,
) {
  return (
    <DEFAULT_ELEMENT {...props} ref={ref} className={className}>
      {children}
    </DEFAULT_ELEMENT>
  );
}

export type TestProps = Props<typeof DEFAULT_ELEMENT>;
export default React.forwardRef(Test) as typeof Test;
