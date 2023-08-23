import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { ButtonBaseProps } from './Button';

import { COLOR } from '@src/Legacy/color/color';

type Props = Pick<ButtonBaseProps, 'variant' | 'shape'>;

const buttonBackground = `var(--buttonBackground, ${COLOR.LIGHT.primary000})`;
const buttonBackgroundHover = `var(--buttonBackgroundHover, ${COLOR.LIGHT.blue000})`;
const buttonBackgroundDisabled = `var(--buttonBackgroundDisabled, ${COLOR.LIGHT.primary200})`;
const buttonBackgroundActive = `var(--buttonBackgroundActive, ${COLOR.LIGHT.primary000})`;
const buttonBackgroundRipple = `var(--buttonBackgroundRipple, rgba(255, 255, 255, 0.6))`;

const buttonText = `var(--buttonText, ${COLOR.LIGHT.primary900})`;
const buttonTextHover = `var(--buttonTextHover, ${COLOR.LIGHT.primary900})`;
const buttonTextDisabled = `var(--buttonTextDisabled, ${COLOR.LIGHT.primary500})`;
const buttonTextActive = `var(--buttonTextActive, ${COLOR.LIGHT.primary700})`;

const buttonBoxShadow = `var(--buttonBoxShadow, 0px 3px 6px rgba(0, 0, 0, 0.1))`;
const buttonOutline = `var(--buttonOutline, ${COLOR.LIGHT.blue200})`;

const colorSet = css`
  background: ${buttonBackground};
  color: ${buttonText};
  box-shadow: ${buttonBoxShadow};
  &:hover {
    background: ${buttonBackgroundHover};
    color: ${buttonTextHover};
  }
  &:disabled {
    background: ${buttonBackgroundDisabled};
    color: ${buttonTextDisabled};
    &:active,
    &:hover {
      background: ${buttonBackgroundDisabled};
      color: ${buttonTextDisabled};
    }
  }
  &:active {
    background: ${buttonBackgroundActive};
    color: ${buttonTextActive};
  }
  &::after {
    background: ${buttonBackgroundRipple};
  }
`;

const buttonVariant = {
  outline: css`
    background: none;
    box-shadow: none;
    outline: 1px solid ${buttonOutline};
    &:hover {
      background: ${buttonBackgroundHover};
      color: ${buttonTextHover};
    }
  `,
  clear: css`
    background: none;
    box-shadow: none;
    &:hover {
      background: ${buttonBackgroundHover};
      color: ${buttonTextHover};
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
