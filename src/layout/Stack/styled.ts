import styled from '@emotion/styled';
import type { StackProps } from './Stack';

import { flex } from '../Flex/styled';

type Props = Pick<StackProps, 'direction' | 'spacing'>;

const Container = styled.div<Props>`
  ${flex}
  flex-direction: ${({ direction }) => direction};
  row-gap: ${({ direction, spacing }) => {
    if (direction === 'column') {
      return `${spacing}px`;
    }
    return '0px';
  }};
  column-gap: ${({ direction, spacing }) => {
    if (direction === 'row') {
      return `${spacing}px`;
    }
    return '0px';
  }};
`;

const Styled = {
  Container,
};

export default Styled;
