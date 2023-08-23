import styled from '@emotion/styled';
import { SideNavMenuGroupBaseProps } from './MenuGroup';
import { css } from '@emotion/react';

type Props = Required<Pick<SideNavMenuGroupBaseProps, 'show' | 'depth'>> & {
  depthGap: number;
};

type ChildrenProps = Pick<Props, 'show'>;

const Children = styled.div<ChildrenProps>`
  overflow: hidden;
  ${({ show }) => {
    if (show) {
      return css`
        max-height: 100vh;
        transition: max-height 0.3s ease-in-out;
      `;
    }

    return css`
      max-height: 0;
      transition: max-height 0.3s cubic-bezier(0, 1, 0, 1), padding 0.5s;
    `;
  }}
`;

const Container = styled.div<Props>`
  padding: 0;
  width: ${({ show }) => (show ? '100%' : '0')};
  margin-left: ${({ depth, depthGap }) => `${depth * depthGap}`}px;
`;

const Styled = {
  Container,
  Children,
};

export default Styled;
