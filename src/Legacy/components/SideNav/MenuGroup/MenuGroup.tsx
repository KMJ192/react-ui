import React from 'react';
import Styled from './styled';

import type { OVER_RIDABLE_PROPS } from '@src/types/types';
import useValueSideNavState from '../store/hooks/useValueSideNavState';

type BaseProps = {
  children?: React.ReactNode;
  show?: boolean;
  depth?: number;
};

type Props<T extends React.ElementType> = OVER_RIDABLE_PROPS<T, BaseProps>;

const DEFAULT_ELEMENT = 'div';

function MenuGroup<T extends React.ElementType = typeof DEFAULT_ELEMENT>(
  { children, as, show = false, depth = 0, className, ...props }: Props<T>,
  ref: React.Ref<any>,
) {
  const ELEMENT = as || DEFAULT_ELEMENT;
  const { depthGap } = useValueSideNavState();

  return (
    <Styled.Container
      {...props}
      as={ELEMENT}
      ref={ref}
      show={show}
      depth={depth}
      depthGap={depthGap}
      className={className}
    >
      <Styled.Children show={show}>{children}</Styled.Children>
    </Styled.Container>
  );
}

type SideNavMenuGroupProps = Props<typeof DEFAULT_ELEMENT>;
export type { SideNavMenuGroupProps, BaseProps as SideNavMenuGroupBaseProps };
export default React.forwardRef(MenuGroup) as typeof MenuGroup;
