import styled from '@emotion/styled';
import { css } from '@emotion/react';

import type { PopupBaseProps } from './Popup';
import { COLOR } from '@src/Legacy/color/color';

type Props = Pick<PopupBaseProps, 'animation' | 'visible'>;

const popupBoxShadow = `var(--popup-box-shadow, 0px 3px 6px rgba(0, 0, 0, 0.2))`;
const popupBackground = `var(--popup-background, ${COLOR.LIGHT.primary000})`;
const popupText = `var(--popup-text, ${COLOR.LIGHT.primary900})`;

const colorSet = css`
  box-shadow: ${popupBoxShadow};
  background-color: ${popupBackground};
  color: ${popupText};
`;

const Container = styled.div<Props>`
  border-radius: 4px;
  visibility: hidden;
  opacity: 0;
  ${colorSet}
  ${({ visible }) => {
    if (!visible) return null;
    return css`
      visibility: visible;
      opacity: 1;
    `;
  }}
  ${({ animation }) => {
    if (animation === 'none') return null;
    return css`
      transition: visibility 0.1s ease-out, opacity 0.2s ease-out;
    `;
  }}
`;

const Styled = {
  Container,
};

export default Styled;
