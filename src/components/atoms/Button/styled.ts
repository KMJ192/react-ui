import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';

import type { ButtonTheme } from '@src/store/theme';

const ELEMENT: 'button' = 'button';

type Variant = 'primary' | 'secondary';

type Props = {
  colorSet: ButtonTheme;
  variant: Variant;
};

const ripple = keyframes`
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
`;

const animation = styled.button`
  position: relative;

  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 4px;
    height: 4px;
    background: rgba(255, 255, 255, 0.6);
    opacity: 0;
    border-radius: 100%;
    transform: scale(1, 1) translate(-50%);
    transform-origin: 50% 50%;
  }

  &:focus:not(:active)::after {
    animation: ${ripple} 0.5s ease-out;
  }
`;

const theme = styled(animation)<Props>`
  color: ${({ colorSet }: Props) => colorSet.text.default};
  background: ${({ colorSet }: Props) => colorSet.background.default};
  &:hover {
    color: ${({ colorSet }: Props) => colorSet.text.hover};
    background: ${({ colorSet }: Props) => colorSet.background.hover};
  }
  &:disabled {
    color: ${({ colorSet }: Props) => colorSet.text.disabled};
    background: ${({ colorSet }: Props) => colorSet.background.disabled};
  }
`;

const ButtonStyled = styled(theme)<Props>`
  padding: 8px 16px;
  font-size: 16px;
  border-radius: 4px;
  border: none;
  overflow: hidden;
  cursor: pointer;
  user-select: none;
  &:disabled {
    cursor: not-allowed;
  }
`;

const Styled = {
  Button: ButtonStyled,
};

export type { Variant };
export { ELEMENT };
export default Styled;
