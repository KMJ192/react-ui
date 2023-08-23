import React from 'react';
import Styled from './styled';

import type { OVER_RIDABLE_PROPS } from '@src/types/types';

type BaseProps = {
  children?: React.ReactNode;
  disabled?: boolean;
  selected?: boolean;
};

type Props<T extends React.ElementType> = OVER_RIDABLE_PROPS<T, BaseProps>;

const DEFAULT_ELEMENT = 'div';

function Menu<T extends React.ElementType = typeof DEFAULT_ELEMENT>(
  { children, as, disabled, selected, className, ...props }: Props<T>,
  ref: React.Ref<any>,
) {
  const ELEMENT = as || DEFAULT_ELEMENT;

  return (
    <Styled.Container
      {...props}
      as={ELEMENT}
      ref={ref}
      disabled={disabled}
      selected={selected}
      className={className}
    >
      {children}
    </Styled.Container>
  );
}

type SideNavMenuProps = Props<typeof DEFAULT_ELEMENT>;
export type { SideNavMenuProps, BaseProps as SideNavMenuBaseProps };
export default React.forwardRef(Menu) as typeof Menu;
