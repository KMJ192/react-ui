import { css } from '@emotion/react';
import styled from '@emotion/styled';

import type { ProgressBarBaseProps } from './ProgressBar';
import { COLOR } from '@src/color/color';

type Props = Pick<ProgressBarBaseProps, 'width' | 'height' | 'percent'>;

type BarProps = Required<Pick<ProgressBarBaseProps, 'percent'>>;

const progressBody = `var(--progress-body, ${COLOR.LIGHT.primary200})`;
const progressBar = `var(--progress-bar, ${COLOR.LIGHT.blue600})`;
const progressPending = `var(--progress-pending, rgba(255, 255, 255, 0.7))`;

const colorSet = {
  body: css`
    background: ${progressBody};
  `,
  bar: css`
    background: ${progressBar};
  `,
  pending: css`
    background: linear-gradient(
      0.25turn,
      ${progressBar},
      ${progressPending},
      ${progressBar}
    );
  `,
};

const Pending = styled.div`
  @keyframes progress {
    0% {
      left: -36px;
    }
    100% {
      left: calc(100% + 36px);
    }
  }

  ${colorSet.pending}
  position: absolute;
  height: 100%;
  width: 36px;
  top: 0;
  left: -36px;
  animation: progress 1.3s infinite;
`;

const Bar = styled.div<BarProps>`
  ${colorSet.bar}
  height: 100%;
  border-radius: 4px;
  position: relative;
  overflow: hidden;
  width: ${({ percent }) => (percent > 100 ? 100 : percent)}%;
`;

const Container = styled.div<Props>`
  ${colorSet.body}
  width: ${({ width }) => {
    if (typeof width === 'string') {
      return width;
    }
    return `${width}px`;
  }};
  height: ${({ height }) => {
    if (typeof height === 'string') {
      return height;
    }
    return `${height}px`;
  }};
  border-radius: 4px;
  overflow: hidden;
`;

const Styled = {
  Container,
  Bar,
  Pending,
};

export default Styled;
