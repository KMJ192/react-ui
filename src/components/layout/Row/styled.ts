import styled from '@emotion/styled';
import { COLOR } from '@src/styles/color';

const Container = styled.div`
  width: inherit;
  padding: 16px 24px;
  border-radius: 6px;
  background: var(--row-background, ${COLOR.LIGHT.primary000});
  box-shadow: var(--row-box-shadow, 0px 3px 6px rgba(64, 64, 64, 0.2));
`;

const Styled = {
  Container,
};

export default Styled;
