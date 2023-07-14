import styled from '@emotion/styled';

const flex = `
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
`;

const Container = styled.div`
  ${flex}
`;

const Styled = {
  Container,
};

export { flex };
export default Styled;
