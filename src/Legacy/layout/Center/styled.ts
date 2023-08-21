import styled from '@emotion/styled';
import type { CenterProps } from './Center';
import { flex } from '../Flex/styled';
import { css } from '@emotion/react';

type Props = Pick<CenterProps, 'vertical' | 'horizontal'>;

const verticalCenter = css`
  align-items: center;
  -webkit-box-align: center;
`;

const horizontalCenter = css`
  justify-content: center;
  -webkit-box-pack: center;
`;

const center = css`
  ${flex}
  height: 100%;
  width: 100%;
  ${verticalCenter}
  ${horizontalCenter}
`;

const Container = styled.div<Props>`
  ${flex}
  height: 100%;
  width: 100%;
  align-items: ${({ vertical }) => vertical && 'center'};
  -webkit-box-align: ${({ vertical }) => vertical && 'center'};
  justify-content: ${({ horizontal }) => horizontal && 'center'};
  -webkit-box-pack: ${({ horizontal }) => horizontal && 'center'};
`;

const Styled = {
  Container,
};

export { center, verticalCenter, horizontalCenter };
export default Styled;
