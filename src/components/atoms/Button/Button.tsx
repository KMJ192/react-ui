import React from 'react';

import Styled, { ELEMENT } from './styled';

import type { OVER_RIDABLE_PROPS } from '@src/types/types';
import useTheme from './hooks/useTheme';

type BaseProps = {
  children?: React.ReactNode;
  variant?: 'primary' | 'secondary';
  loading?: boolean;
};

type Props<T extends React.ElementType> = OVER_RIDABLE_PROPS<T, BaseProps>;

function Button<T extends React.ElementType = typeof ELEMENT>(
  { variant = 'primary', loading = false, children, ...props }: Props<T>,
  ref: React.Ref<any>,
) {
  const { colorSet } = useTheme();

  return (
    <Styled.Button {...props} ref={ref} colorSet={colorSet}>
      {children}
    </Styled.Button>
  );
}

export type { BaseProps as ButtonProps };
export default React.forwardRef(Button) as typeof Button;
