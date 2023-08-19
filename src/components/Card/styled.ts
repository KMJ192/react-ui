import styled from '@emotion/styled';
import { css } from '@emotion/react';

import { COLOR } from '@src/color/color';
import { CardBaseProps } from './Card';

type Props = Pick<CardBaseProps, 'width' | 'height'>;

const cardBoxShadow = `var(--card-box-shadow, 0px 3px 6px rgba(0, 0, 0, 0.2))`;
const cardBackground = `var(--card-background, ${COLOR.LIGHT.primary000})`;
const cardText = `var(--card-text, ${COLOR.LIGHT.primary900})`;

const colorSet = css`
  box-shadow: ${cardBoxShadow};
  background-color: ${cardBackground};
  color: ${cardText};
`;

const Container = styled.div<Props>`
  ${colorSet}
  border-radius: 4px;
  ${({ width, height }) => {
    return css`
      width: ${width}px;
      height: ${height}px;
    `;
  }}
`;

const Styled = {
  Container,
};

export default Styled;
