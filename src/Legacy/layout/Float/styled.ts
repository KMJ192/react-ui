import styled from '@emotion/styled';
import type { FloatProps } from './Float';

type Props = Pick<
  FloatProps,
  'startDirection' | 'left' | 'top' | 'right' | 'bottom'
>;

const Container = styled.div<Props>`
  position: fixed;
  top: ${({ startDirection, top }) => {
    if (startDirection === 'lt') return `${top}px`;
    return null;
  }};
  left: ${({ startDirection, left }) => {
    if (startDirection === 'lt') return `${left}px`;
    return null;
  }};
  bottom: ${({ startDirection, bottom }) => {
    if (startDirection === 'rb') return `${bottom}px`;
    return null;
  }};
  right: ${({ startDirection, right }) => {
    if (startDirection === 'rb') return `${right}px`;
    return null;
  }};
`;

const Styled = {
  Container,
};

export default Styled;
