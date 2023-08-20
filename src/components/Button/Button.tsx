import React from 'react';
import { Case, Default, Switch, When } from '@himideula/react-utils';
import type { Shape, Variant } from './types';
import type { OVER_RIDABLE_PROPS } from '@src/types/types';
import Center from '../../layout/Center/Center';
import Spinner from '../Spinner/Spinner';
import Styled from './styled';

type BaseProps = {
  children?: React.ReactNode;
  variant?: Variant;
  shape?: Shape;
  loading?: boolean;
  loadingElement?: React.ReactNode;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
};

type Props<T extends React.ElementType> = OVER_RIDABLE_PROPS<T, BaseProps>;

const DEFAULT_ELEMENT = 'button';

function Button<T extends React.ElementType = typeof DEFAULT_ELEMENT>(
  {
    children,
    as,
    variant = 'primary',
    shape = 'rect',
    loading = false,
    loadingElement,
    className,
    leftIcon,
    rightIcon,
    disabled = false,
    ...props
  }: Props<T>,
  ref: React.Ref<any>,
) {
  const ELEMENT = as || DEFAULT_ELEMENT;

  return (
    <Styled.Container
      {...props}
      as={ELEMENT}
      variant={variant}
      shape={shape}
      ref={ref}
      disabled={disabled || loading}
      className={className}
    >
      <Center>
        {leftIcon && <Styled.Icon>{leftIcon}</Styled.Icon>}
        {children}
        {rightIcon && <Styled.Icon>{rightIcon}</Styled.Icon>}
        <When condition={loading}>
          <Switch>
            <Case condition={loadingElement !== undefined}>
              {loadingElement}
            </Case>
            <Default>
              <Styled.Spinner>
                <Spinner size={20} />
              </Styled.Spinner>
            </Default>
          </Switch>
        </When>
      </Center>
    </Styled.Container>
  );
}

type ButtonProps = Props<typeof DEFAULT_ELEMENT>;
export type { ButtonProps, BaseProps as ButtonBaseProps };
export default React.forwardRef(Button) as typeof Button;
