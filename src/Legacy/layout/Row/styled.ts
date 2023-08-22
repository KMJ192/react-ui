import styled from '@emotion/styled';
import { COLOR } from '@src/Legacy/color/color';

const Container = styled.div`
  width: inherit;
  padding: 16px 24px;
  border-radius: 6px;
  background: var(--rowBackground, ${COLOR.LIGHT.primary000});
  box-shadow: var(--rowBoxShadow, 0px 3px 6px rgba(64, 64, 64, 0.2));
`;

const Styled = {
  Container,
};

export default Styled;
