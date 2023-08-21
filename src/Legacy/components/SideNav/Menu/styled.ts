import styled from '@emotion/styled';

import type { SideNavMenuBaseProps } from './Menu';
import { css } from '@emotion/react';
import {
  sideNavMenuBackground,
  sideNavMenuBackgroundDisabled,
  sideNavMenuBackgroundSelected,
  sideNavMenuBoxShadow,
  sideNavMenuBoxShadowSelected,
  sideNavMenuText,
  sideNavMenuTextDisabled,
  sideNavMenuTextHover,
  sideNavMenuTextSelected,
} from '../color';

type Props = Pick<SideNavMenuBaseProps, 'disabled' | 'selected'>;

const colorSet = {
  default: css`
    background: ${sideNavMenuBackground};
    box-shadow: ${sideNavMenuBoxShadow};
    color: ${sideNavMenuText};
  `,
  hover: css`
    color: ${sideNavMenuTextHover};
  `,
  selected: css`
    background: ${sideNavMenuBackgroundSelected};
    box-shadow: ${sideNavMenuBoxShadowSelected};
    color: ${sideNavMenuTextSelected};
  `,
  disabled: css`
    background: ${sideNavMenuBackgroundDisabled};
    box-shadow: none;
    color: ${sideNavMenuTextDisabled};
  `,
};

const Container = styled.div<Props>`
  align-items: center;
  -webkit-box-align: center;
  padding: 8px;
  white-space: nowrap;
  border-radius: 8px 0 0 8px;
  padding: 12px;
  transition: color 0.15s, background-color 0.15s;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  ${({ disabled, selected }) => {
    if (disabled) return colorSet.disabled;
    if (selected) return colorSet.selected;
    return colorSet.default;
  }}
  &:hover {
    ${({ disabled }) => {
      if (disabled) return null;
      return colorSet.hover;
    }}
  }
`;

const Styled = {
  Container,
};

export default Styled;
