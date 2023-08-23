import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { TextBaseProps } from './Text';

type Props = Pick<TextBaseProps, 'typo' | 'ellipsis'>;

const textEllipsis = css`
  display: block;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

const Container = styled.div<Props>`
  ${({ ellipsis }) => ellipsis && textEllipsis}
  font-size: ${({ typo }) => {
    if (typo === 'h1' || typo === 'header1') {
      return 64;
    }
    if (typo === 'h2' || typo === 'header2') {
      return 48;
    }
    if (typo === 'h3' || typo === 'header3') {
      return 32;
    }
    if (typo === 't1' || typo === 'title1') {
      return 24;
    }
    if (typo === 't2' || typo === 'title2') {
      return 20;
    }
    if (typo === 's1' || typo === 'subtitle1') {
      return 16;
    }
    if (typo === 's2' || typo === 'subtitle2') {
      return 14;
    }
    if (typo === 'b1' || typo === 'body1') {
      return 16;
    }
    if (typo === 'b2' || typo === 'body2') {
      return 14;
    }
    if (typo === 'c1' || typo === 'caption1') {
      return 12;
    }

    return 16;
  }}px;
  font-weight: ${({ typo }) => {
    if (typo === 'h1' || typo === 'header1') {
      return 700;
    }
    if (typo === 'h2' || typo === 'header2') {
      return 700;
    }
    if (typo === 'h3' || typo === 'header3') {
      return 600;
    }
    if (typo === 't1' || typo === 'title1') {
      return 600;
    }
    if (typo === 't2' || typo === 'title2') {
      return 600;
    }
    if (typo === 's1' || typo === 'subtitle1') {
      return 500;
    }
    if (typo === 's2' || typo === 'subtitle2') {
      return 500;
    }
    if (typo === 'b1' || typo === 'body1') {
      return 400;
    }
    if (typo === 'b2' || typo === 'body2') {
      return 400;
    }
    if (typo === 'c1' || typo === 'caption1') {
      return 400;
    }

    return 500;
  }};
`;

const Styled = {
  Container,
};

export default Styled;
