import { css } from '@emotion/react';

import { COLOR } from '../color/color';

type Props = {
  width?: number;
  height?: number;
  color?: string;
  hoverColor?: string;
};

const scrollbar = ({
  width = 16,
  height = 16,
  color = COLOR.LIGHT.primary300,
  hoverColor = COLOR.LIGHT.primary400,
}: Props) => css`
  &::-webkit-scrollbar {
    width: ${width};
    height: ${height};
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${color};
    background-clip: content-box;
    border: 4px solid transparent;
    border-radius: 16px;
    &:hover {
      background-color: ${hoverColor};
    }
  }
  &::-webkit-scrollbar-corner {
    display: none;
  }
`;

export { scrollbar };
