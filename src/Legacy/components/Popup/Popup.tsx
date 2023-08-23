import React from 'react';
import Styled from './styled';

import type { OVER_RIDABLE_PROPS } from '@src/types/types';

type BaseProps = {
  children?: React.ReactNode;
  animation?: 'fade' | 'none';
  visible?: boolean;
};

type Props<T extends React.ElementType> = OVER_RIDABLE_PROPS<T, BaseProps>;

const DEFAULT_ELEMENT = 'div';

function Popup<T extends React.ElementType = typeof DEFAULT_ELEMENT>(
  {
    children,
    as,
    animation = 'fade',
    visible = false,
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
      animation={animation}
      visible={visible}
    >
      {children}
    </Styled.Container>
  );
}

type PopupProps = Props<typeof DEFAULT_ELEMENT>;
export type { PopupProps, BaseProps as PopupBaseProps };
export default React.forwardRef(Popup) as typeof Popup;
