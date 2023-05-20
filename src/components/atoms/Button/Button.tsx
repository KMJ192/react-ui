import React from 'react';
import { css } from '@emotion/css';
import useValueUIState from '@src/store/hooks/useValueUIState';

import type { OVER_RIDABLE_PROPS } from '@src/types/types';
import { style, dark, light } from './style';

type BaseProps = {
  children?: React.ReactNode;
};

const DEFAULT_COMPONENT_ELEMENT = 'button';

type Props<T extends React.ElementType> = OVER_RIDABLE_PROPS<T, BaseProps>;

function Button<T extends React.ElementType = typeof DEFAULT_COMPONENT_ELEMENT>(
  { children, as, className, ...props }: Props<T>,
  ref: React.Ref<any>,
) {
  const Element = as ?? DEFAULT_COMPONENT_ELEMENT;
  const { theme } = useValueUIState();

  return (
    <Element
      {...props}
      ref={ref}
      className={`
        ${style} 
        ${theme === 'light' && light} 
        ${theme === 'dark' && dark} 
        ${className}`}
    >
      {children}
    </Element>
  );
}

export type { BaseProps as ButtonProps };
export default React.forwardRef(Button) as typeof Button;
