import styled from '@emotion/styled';
import type { TabProps } from './Tab';

type Props = Pick<TabProps, 'direction'> & {
  left?: string;
  top?: string;
  width?: string;
  height?: string;
};

const TabLine = styled.div<Props>`
  left: ${({ direction, left }) => {
    if (direction === 'horizontal') return left;
    return null;
  }};
  width: ${({ direction, width }) => {
    if (direction === 'horizontal') return width;
    return null;
  }};
  top: ${({ direction, top }) => {
    if (direction === 'vertical') return top;
    return null;
  }};
  height: ${({ direction, height }) => {
    if (direction === 'vertical') return height;
    return null;
  }};
`;

const Styled = {
  TabLine,
};

export default Styled;
