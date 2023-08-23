import React from 'react';
import Styled from './styled';

import type { OVER_RIDABLE_PROPS } from '@src/types/types';
import { When } from '@himideula/react-utils';

type BaseProps = {
  error?: boolean;
  fontSize?: number;
  paddingTop?: number;
  paddingBottom?: number;
  paddingLeft?: number;
  paddingRight?: number;
  leftIcon?: React.ReactNode;
  leftIconPos?: number;
  rightIcon?: React.ReactNode;
  rightIconPos?: number;
};

type Props<T extends React.ElementType> = OVER_RIDABLE_PROPS<T, BaseProps>;

const DEFAULT_ELEMENT = 'input';

function Input<T extends React.ElementType = typeof DEFAULT_ELEMENT>(
  {
    type,
    fontSize = 16,
    error = false,
    paddingTop = 10,
    paddingBottom = 10,
    paddingLeft = 10,
    paddingRight = 10,
    leftIcon,
    leftIconPos = 10,
    rightIcon,
    rightIconPos = 10,
    className,
    ...props
  }: Props<T>,
  ref: React.Ref<any>,
) {
  const isLeftIcon = leftIcon !== undefined && leftIcon !== null;
  const isRightIcon = rightIcon !== undefined && rightIcon !== null;

  return (
    <Styled.Container
      isLeftIcon={isLeftIcon}
      isRightIcon={isRightIcon}
      className={className}
    >
      <When condition={isLeftIcon}>
        <Styled.Icon
          isLeftIcon
          isRightIcon={false}
          leftIconPos={leftIconPos}
          rightIconPos={rightIconPos}
        >
          {leftIcon}
        </Styled.Icon>
      </When>
      <Styled.Input
        {...props}
        ref={ref}
        fontSize={fontSize}
        error={error}
        paddingTop={paddingTop}
        paddingBottom={paddingBottom}
        paddingLeft={paddingLeft}
        paddingRight={paddingRight}
        isLeftIcon={isLeftIcon}
        isRightIcon={isRightIcon}
        type={type}
      />
      <When condition={isRightIcon}>
        <Styled.Icon
          isLeftIcon={false}
          isRightIcon
          leftIconPos={leftIconPos}
          rightIconPos={rightIconPos}
        >
          {rightIcon}
        </Styled.Icon>
      </When>
    </Styled.Container>
  );
}

type InputProps = Props<typeof DEFAULT_ELEMENT>;
export type { InputProps, BaseProps as InputBaseProps };
export default React.forwardRef(Input) as typeof Input;
