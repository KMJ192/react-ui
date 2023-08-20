import styled from '@emotion/styled';
import { flex } from '../../layout/Flex/styled';
import { center } from '../../layout/Center/styled';
import { css } from '@emotion/react';

import { COLOR } from '@src/color/color';

import type { RadioBaseProps } from './Radio';

type Props = Pick<
  RadioBaseProps,
  'disabled' | 'checked' | 'size' | 'pupilSize' | 'fontSize'
>;

const radioBorder = `var(--radio-border, ${COLOR.LIGHT.primary300})`;
const radioBorderChecked = `var(--radio-border-checked, ${COLOR.LIGHT.blue400})`;
const radioBorderCheckedDisabled = `var(--radio-border-checked-disabled, ${COLOR.LIGHT.primary400})`;
const radioBorderCheckedHover = `var(--radio-border-checked-hover, ${COLOR.LIGHT.blue500})`;
const radioBorderDisabled = `var(--radio-border-disabled, ${COLOR.LIGHT.primary300})`;
const radioBorderHover = `var(--radio-border-hover, ${COLOR.LIGHT.blue500})`;

const radioBackground = `var(--radio-background)`;
const radioBackgroundChecked = `var(--radio-background-checked)`;
const radioBackgroundCheckedHover = `var(--radio-background-checked-hover)`;
const radioBackgroundCheckedDisabled = `var(--radio-background-checked-disabled, ${COLOR.LIGHT.primary300})`;
const radioBackgroundDisabled = `var(--radio-background-disabled, ${COLOR.LIGHT.primary200})`;
const radioBackgroundHover = `var(--radio-background-hover)`;

const radioText = `var(--radio-text, ${COLOR.LIGHT.primary900})`;
const radioTextHover = `var(--radio-text-hover, ${COLOR.LIGHT.blue600})`;
const radioTextDisabled = `var(--radio-text-disabled, ${COLOR.LIGHT.primary300})`;

const radioPupil = `var(--radio-pupil, ${COLOR.LIGHT.blue400})`;
const radioPupilDisabled = `var(--radio-pupil-disabled, ${COLOR.LIGHT.primary500})`;
const radioPupilHover = `var(--radio-pupil-hover, ${COLOR.LIGHT.blue500})`;

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
        .radio-pupil {
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
