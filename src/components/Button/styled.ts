import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { ButtonBaseProps } from './Button';

import { COLOR } from '@src/color/color';

type Props = Pick<ButtonBaseProps, 'variant' | 'shape'>;

const colorSet = css`
  background: var(--button-background, ${COLOR.LIGHT.primary000});
  color: var(--button-text, ${COLOR.LIGHT.primary900});
  box-shadow: var(--button-box-shadow, 0px 3px 6px rgba(0, 0, 0, 0.1));
  &:hover {
    background: var(--button-background-hover, ${COLOR.LIGHT.blue000});
    color: var(--button-text-hover, ${COLOR.LIGHT.primary900});
  }
  &:disabled {
    background: var(--button-background-disabled, ${COLOR.LIGHT.primary200});
    color: var(--button-text-disabled, ${COLOR.LIGHT.primary500});
    &:active,
    &:hover {
      background: var(--button-background-disabled, ${COLOR.LIGHT.primary200});
      color: var(--button-text-disabled, ${COLOR.LIGHT.primary500});
    }
  }
  &:active {
    background: var(--button-background-active, ${COLOR.LIGHT.primary000});
    color: var(--button-text-active, ${COLOR.LIGHT.primary700});
  }
`;

const buttonVariant = {
  outline: css`
    background: none;
    box-shadow: none;
    outline: 1px solid var(--button-outline, ${COLOR.LIGHT.blue200});
    &:hover {
      background: var(--button-background-hover, ${COLOR.LIGHT.blue000});
      color: var(--button-text-hover, ${COLOR.LIGHT.primary900});
    }
  `,
  clear: css`
    background: none;
    box-shadow: none;
    &:hover {
      background: var(--button-background-hover, ${COLOR.LIGHT.blue000});
      color: var(--button-text-hover, ${COLOR.LIGHT.primary900});
    }
  `,
};

const buttonShape = {
  circle: css`
    border-radius: 50%;
    aspect-ratio: 1;
  `,
  square: css`
    aspect-ratio: 1;
  `,
};

const ripple = css`
  @keyframes ripple {
    0% {
      transform: scale(0, 0);
      opacity: 1;
    }
    20% {
      transform: scale(25, 25);
    }
    100% {
      transform: scale(40, 40);
      opacity: 0;
    }
  }
`;

const Container = styled.button<Props>`
  ${ripple}
  ${colorSet}
  padding: 8px 16px;
  font-size: 16px;
  border-radius: 4px;
  border: none;
  overflow: hidden;
  column-gap: 8px;
  cursor: pointer;
  position: relative;
  &:disabled {
    cursor: not-allowed;
  }
  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 4px;
    height: 4px;
    background: var(--button-background-ripple, rgba(255, 255, 255, 0.6));
    opacity: 0;
    border-radius: 100%;
    transform: scale(1, 1) translate(-50%);
    transform-origin: 50% 50%;
  }
  &:focus:not(:active)::after {
    animation: ripple 0.5s ease-out;
  }
  ${({ shape }) => {
    if (shape === 'circle') {
      return buttonShape.circle;
    }
    if (shape === 'square') {
      return buttonShape.square;
    }
    return null;
  }}
  ${({ variant }) => {
    if (variant === 'clear') {
      return buttonVariant.clear;
    }
    if (variant === 'outline') {
      return buttonVariant.outline;
    }
    return null;
  }}
`;

const Icon = styled.div`
  width: 24px;
  aspect-ratio: 1;
  place-content: center;
`;

const Spinner = styled.div`
  position: absolute;
`;

const Styled = {
  Container,
  Icon,
  Spinner,
};

export default Styled;
