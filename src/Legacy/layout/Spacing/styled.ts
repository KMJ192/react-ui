import styled from '@emotion/styled';

import type { SpacingProps } from './Spacing';

type Props = Pick<SpacingProps, 'direction' | 'size'>;

const Container = styled.div<Props>`
  height: ${({ direction, size }) => {
    if (direction === 'vertical') return `${size}px`;
    return null;
  }};
  width: ${({ direction, size }) => {
    if (direction === 'horizontal') return `${size}px`;
    return null;
  }};
`;

const Styled = {
  Container,
};

export default Styled;
