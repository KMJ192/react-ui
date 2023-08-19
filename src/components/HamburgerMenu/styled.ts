import styled from '@emotion/styled';
import { css } from '@emotion/react';

import type { HamburgerMenuBaseProps } from './HamburgerMenu';

import { COLOR } from '@src/color/color';

type Props = Required<HamburgerMenuBaseProps>;

const type1 = (transform: number) => {
  return css`
    & > span:nth-of-type(1) {
      -webkit-transform: translateY (${transform}px) rotate (-45deg);
      transform: translateY(${transform}px) rotate(-45deg);
    }
    & > span:nth-of-type(2) {
      opacity: 0;
    }
    & > span:nth-of-type(3) {
      -webkit-transform: translateY(-${transform}px) rotate(45deg);
      transform: translateY(-${transform}px) rotate(45deg);
    }
  `;
};

const type2 = (transform: number) => {
  return css`
    & > span:nth-of-type(1) {
      -webkit-transform: translateY(${transform}px) rotate(-315deg);
      transform: translateY(${transform}px) rotate(-315deg);
    }
    & > span:nth-of-type(2) {
      opacity: 0;
    }
    & > span:nth-of-type(3) {
      -webkit-transform: translateY(-${transform}px) rotate(315deg);
      transform: translateY(-${transform}px) rotate(315deg);
    }
  `;
};

const type3 = (transform: number) => {
  return css`
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
    & > span:nth-of-type(1) {
      -webkit-transform: translateY(${transform}px) rotate(-45deg);
      transform: translateY(${transform}px) rotate(-45deg);
    }
    & > span:nth-of-type(2) {
      -webkit-transform: translateY(0) rotate(45deg);
      transform: translateY(0) rotate(45deg);
    }
    & > span:nth-of-type(3) {
      opacity: 0;
    }
  `;
};

const colorSet = css`
  background: var(--hamburger-menu-bar-background, ${COLOR.LIGHT.primary500});
`;

const Container = styled.div<Props>`
  position: relative;
  cursor: pointer;
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
  ${({ active, type, midBar }) => {
    if (!active) return null;
    if (type === 'type2') {
      return type2(midBar);
    }
    if (type === 'type3') {
      return type3(midBar);
    }
    return type1(midBar);
  }}
  &,
  & > span {
    display: inline-block;
    transition: transform 0.4s, opacity 0.4s;
    box-sizing: border-box;
  }
  & > span {
    position: absolute;
    left: 0;
    width: 100%;
    height: 2px;
    border-radius: 4px;
    ${colorSet};
    &:nth-of-type(1) {
      top: 0;
    }
    &:nth-of-type(2) {
      top: ${({ midBar }) => midBar}px;
    }
    &:nth-of-type(3) {
      bottom: 0;
    }
  }
`;

const Styled = {
  Container,
};

export default Styled;
