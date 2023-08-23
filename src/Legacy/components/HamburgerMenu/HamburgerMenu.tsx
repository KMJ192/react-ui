import React from 'react';
import Styled from './styled';

import type { OVER_RIDABLE_PROPS } from '@src/types/types';

type BaseProps = {
  type?: 'type1' | 'type2' | 'type3';
  active?: boolean;
  width?: number;
  height?: number;
  midBar?: number;
};

type Props<T extends React.ElementType> = OVER_RIDABLE_PROPS<T, BaseProps>;

const DEFAULT_ELEMENT = 'div';

function HamburgerMenu<T extends React.ElementType = typeof DEFAULT_ELEMENT>(
  {
    type = 'type1',
    active = false,
    width = 24,
    height = 18,
    midBar = 8,
    as,
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
      type={type}
      active={active}
      width={width}
      height={height}
      midBar={midBar}
      className={className}
    >
      <span></span>
      <span></span>
      <span></span>
    </Styled.Container>
  );
}

type HamburgerMenuProps = Props<typeof DEFAULT_ELEMENT>;
export type { HamburgerMenuProps, BaseProps as HamburgerMenuBaseProps };
export default React.forwardRef(HamburgerMenu) as typeof HamburgerMenu;
