import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';

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

const animation = {
  ripple,
};

const Button = styled.button`
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
    animation: ripple 0.5s ease-out;
  }
`;
