import React from 'react';
import Styled from './styled';

import type { OVER_RIDABLE_PROPS } from '@src/types/types';

type BaseProps = {
  children?: React.ReactNode;
  checked?: boolean;
  disabled?: boolean;
  size?: number;
  pupilSize?: number;
  fontSize?: number;
};

type Props<T extends React.ElementType> = OVER_RIDABLE_PROPS<T, BaseProps>;

const DEFAULT_ELEMENT = 'div';

function Radio<T extends React.ElementType = typeof DEFAULT_ELEMENT>(
  {
    as,
    children,
    checked = false,
    disabled = false,
    size = 16,
    pupilSize = 10,
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
      <Styled.Mark
        size={size}
        checked={checked}
        disabled={disabled}
        className='radio-mark'
      >
        <Styled.Pupil
          checked={checked}
          disabled={disabled}
          pupilSize={pupilSize}
          className='radio-pupil'
        />
      </Styled.Mark>
      <Styled.Children
        fontSize={fontSize}
        disabled={disabled}
        className='radio-children'
      >
        {children}
      </Styled.Children>
    </Styled.Container>
  );
}

type RadioProps = Props<typeof DEFAULT_ELEMENT>;
export type { RadioProps, BaseProps as RadioBaseProps };
export default React.forwardRef(Radio) as typeof Radio;
