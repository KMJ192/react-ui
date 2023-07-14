import styled from '@emotion/styled';
import { flex } from '../Flex/styled';

import type { CenterProps } from './Center';

type Props = Pick<CenterProps, 'vertical' | 'horizontal'>;

const Container = styled.div<Props>`
  ${flex}
  height: inherit;
  width: inherit;
  align-items: ${(props) => props.vertical && 'center'};
  -webkit-box-align: ${(props) => props.vertical && 'center'};
  justify-content: ${(props) => props.horizontal && 'center'};
  -webkit-box-pack: ${(props) => props.horizontal && 'center'};
`;

const Styled = {
  Container,
};

export default Styled;
