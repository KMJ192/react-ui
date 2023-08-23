import React from 'react';
import Styled from './styled';

import type { OVER_RIDABLE_PROPS } from '@src/types/types';
import Mark from './Mark';

type BaseProps = {
  children?: React.ReactNode;
  checked?: boolean;
  multiple?: boolean;
  disabled?: boolean;
  size?: number;
  fontSize?: number;
};

type Props<T extends React.ElementType> = OVER_RIDABLE_PROPS<T, BaseProps>;

const DEFAULT_ELEMENT = 'div';

function Checkbox<T extends React.ElementType = typeof DEFAULT_ELEMENT>(
  {
    children,
    checked = false,
    multiple = false,
    disabled = false,
    size = 16,
    fontSize = 16,
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
      as={ELEMENT}
      ref={ref}
      className={className}
      size={size}
      fontSize={fontSize}
      checked={checked}
      disabled={disabled}
    >
      <Mark
        checked={checked}
        multiple={multiple}
        disabled={disabled}
        size={size}
      />
      {children}
    </Styled.Container>
  );
}

type CheckboxProps = Props<typeof DEFAULT_ELEMENT>;
export type { CheckboxProps, BaseProps as CheckboxBaseProps };
export default React.forwardRef(Checkbox) as typeof Checkbox;
