import { css } from '@emotion/css';

import { COLOR } from '../../../styles/color';

const dark = css`
  background-color: ${COLOR.dark.primary000};
`;
const light = css`
  background-color: ${COLOR.light.primary100};
  &:hover {
    background-color: ${COLOR.light.primary200};
  }
`;

const style = css`
  padding: 8px 16px;
  font-size: 16px;
  border-radius: 4px;
  border: none;
  cursor: pointer;
`;

export { style, dark, light };
