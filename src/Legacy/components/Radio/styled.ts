import styled from '@emotion/styled';
import { css } from '@emotion/react';

import { COLOR } from '@src/Legacy/color/color';

import type { RadioBaseProps } from './Radio';
import { flex } from '@src/Legacy/layout/Flex/styled';
import { center } from '@src/Legacy/layout/Center/styled';

type Props = Pick<
  RadioBaseProps,
  'disabled' | 'checked' | 'size' | 'pupilSize' | 'fontSize'
>;

const radioBorder = `var(--radioBorder, ${COLOR.LIGHT.primary300})`;
const radioBorderChecked = `var(--radioBorderChecked, ${COLOR.LIGHT.blue400})`;
const radioBorderCheckedDisabled = `var(--radioBorderChecked-disabled, ${COLOR.LIGHT.primary400})`;
const radioBorderCheckedHover = `var(--radioBorderCheckedHover, ${COLOR.LIGHT.blue500})`;
const radioBorderDisabled = `var(--radioBorderDisabled, ${COLOR.LIGHT.primary300})`;
const radioBorderHover = `var(--radioBorder-hover, ${COLOR.LIGHT.blue500})`;

const radioBackground = `var(--radioBackground)`;
const radioBackgroundChecked = `var(--radioBackgroundChecked)`;
const radioBackgroundCheckedHover = `var(--radioBackgroundCheckedHover)`;
const radioBackgroundCheckedDisabled = `var(--radioBackgroundCheckedDisabled, ${COLOR.LIGHT.primary300})`;
const radioBackgroundDisabled = `var(--radioBackgroundDisabled, ${COLOR.LIGHT.primary200})`;
const radioBackgroundHover = `var(--radioBackgroundHover)`;

const radioText = `var(--radioText, ${COLOR.LIGHT.primary900})`;
const radioTextHover = `var(--radioTextHover, ${COLOR.LIGHT.blue600})`;
const radioTextDisabled = `var(--radioTextDisabled, ${COLOR.LIGHT.primary300})`;

const radioPupil = `var(--radioPupil, ${COLOR.LIGHT.blue400})`;
const radioPupilDisabled = `var(--radioPupilDisabled, ${COLOR.LIGHT.primary500})`;
const radioPupilHover = `var(--radioPupilHover, ${COLOR.LIGHT.blue500})`;

const colorSet = {
  mark: {
    default: css`
      border-color: ${radioBorder};
      background: ${radioBackground};
    `,
    checked: css`
      border-color: ${radioBorderChecked};
      background: ${radioBackgroundChecked};
    `,
    checkedDisabled: css`
      border-color: ${radioBorderCheckedDisabled};
      background: ${radioBackgroundCheckedDisabled};
    `,
    checkedHover: css`
      border-color: ${radioBorderCheckedHover};
      background: ${radioBackgroundCheckedHover};
    `,
    disabled: css`
      border-color: ${radioBorderDisabled};
      background: ${radioBackgroundDisabled};
    `,
    hover: css`
      border-color: ${radioBorderHover};
      background: ${radioBackgroundHover};
    `,
  },
  pupil: {
    default: css`
      background: ${radioPupil};
    `,
    disabled: css`
      background: ${radioPupilDisabled};
    `,
    hover: css`
      background: ${radioPupilHover};
    `,
  },
  children: {
    default: css`
      color: ${radioText};
    `,
    disabled: css`
      color: ${radioTextDisabled};
    `,
    hover: css`
      color: ${radioTextHover};
    `,
  },
};

const Children = styled.span<Props>`
  transition: color 0.1s ease;
  font-size: ${({ fontSize }) => fontSize}px;
  ${({ disabled }) => {
    if (disabled) {
      return colorSet.children.disabled;
    }
    return colorSet.children.default;
  }}
`;

const Mark = styled.div<Props>`
  ${center}
  border: 2px solid;
  aspect-ratio: 1;
  place-content: center;
  border-radius: 50%;
  transition: border-color 0.1s ease;
  width: 16px;
  ${({ disabled, checked }) => {
    if (!disabled && checked) {
      return colorSet.mark.checked;
    }
    if (disabled && checked) {
      return colorSet.mark.checkedDisabled;
    }
    if (disabled) {
      return colorSet.mark.disabled;
    }
    return colorSet.mark.default;
  }}
`;

const Pupil = styled.span<Props>`
  aspect-ratio: 1;
  border-radius: 50%;
  width: 10px;
  place-content: center;
  transform: ${({ checked }) => (checked ? 'scale(1)' : 'scale(0)')};
  transition: transform 0.1s ease, background-color 0.1s ease;
  ${({ disabled }) => {
    if (disabled) {
      return colorSet.pupil.disabled;
    }
    return colorSet.pupil.default;
  }}
`;

const Container = styled.div<Props>`
  ${flex}
  align-items: center;
  -webkit-box-align: center;
  column-gap: 8px;
  width: fit-content;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  &:hover {
    ${({ disabled }) => {
      if (disabled) return null;
      return css`
        .radioPupil {
          ${colorSet.pupil.hover}
        }
        .radio-children {
          ${colorSet.children.hover}
        }
      `;
    }}
    ${({ disabled, checked }) => {
      if (disabled) return null;
      if (checked) {
        return css`
          .radio-mark {
            ${colorSet.mark.checkedHover}
          }
        `;
      }
      return css`
        .radio-mark {
          ${colorSet.mark.hover}
        }
      `;
    }}
  }
`;

const Styled = {
  Container,
  Children,
  Mark,
  Pupil,
};

export default Styled;
