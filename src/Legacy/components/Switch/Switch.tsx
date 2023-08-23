import React from 'react';
import Styled from './styled';

import type { OVER_RIDABLE_PROPS } from '@src/types/types';

type BaseProps = {
  children?: React.ReactNode;
  checked?: boolean;
  disabled?: boolean;
  width?: number;
  height?: number;
  bulletSize?: number;
  fontSize?: number;
};

type Props<T extends React.ElementType> = OVER_RIDABLE_PROPS<T, BaseProps>;

const DEFAULT_ELEMENT = 'div';

function Switch<T extends React.ElementType = typeof DEFAULT_ELEMENT>(
  {
    children,
    as,
    checked = false,
    disabled = false,
    width = 44,
    height = 24,
    bulletSize = 16,
    fontSize = 16,
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
      checked={checked}
      disabled={disabled}
      className={className}
    >
      <Styled.SwitchBody
        checked={checked}
        disabled={disabled}
        width={width}
        height={height}
        className='switch-body'
      >
        <Styled.SwitchBullet
          width={width}
          checked={checked}
          disabled={disabled}
          bulletSize={bulletSize}
          className='switch-bullet'
        />
      </Styled.SwitchBody>

      <Styled.Children
        checked={checked}
        disabled={disabled}
        fontSize={fontSize}
        className='switch-children'
      >
        {children}
      </Styled.Children>
    </Styled.Container>
  );
}

type SwitchProps = Props<typeof DEFAULT_ELEMENT>;
export type { SwitchProps, BaseProps as SwitchBaseProps };
export default React.forwardRef(Switch) as typeof Switch;
