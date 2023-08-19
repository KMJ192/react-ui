import styled from '@emotion/styled';
import type { CenterProps } from './Center';
import { flex } from '../Flex/styled';
import { css } from '@emotion/react';

type Props = Pick<CenterProps, 'vertical' | 'horizontal'>;

const center = css`
  ${flex}
  height: 100%;
  width: 100%;
  align-items: center;
  -webkit-box-align: center;
  justify-content: center;
  -webkit-box-pack: center;
`;

const Container = styled.div<Props>`
  ${flex}
  height: 100%;
  width: 100%;
  align-items: ${(props) => props.vertical && 'center'};
  -webkit-box-align: ${(props) => props.vertical && 'center'};
  justify-content: ${(props) => props.horizontal && 'center'};
  -webkit-box-pack: ${(props) => props.horizontal && 'center'};
`;

const Styled = {
  Container,
};

export { center };
export default Styled;
