import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { sideNavBackground, sideNavBoxShadow } from './color';
import { scrollbar } from '@src/styles/scrollbar';
import { flex } from '@src/Legacy/layout/Flex/styled';

const colorSet = css`
  background: ${sideNavBackground};
  box-shadow: ${sideNavBoxShadow};
`;

const Container = styled.div`
  ${flex}
  ${colorSet}
  ${scrollbar({})}
  flex-direction: column;
  width: 164px;
  height: inherit;
  overflow: auto;
  padding: 16px 0 16px 16px;
`;

const Styled = {
  Container,
};

export default Styled;
