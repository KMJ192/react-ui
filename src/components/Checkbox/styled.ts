import styled from '@emotion/styled';
import { CheckboxBaseProps } from './Checkbox';
import { flex } from '../../layout/Flex/styled';
import { css } from '@emotion/react';
import { COLOR } from '@src/color/color';

type Props = Pick<
  CheckboxBaseProps,
  'checked' | 'disabled' | 'size' | 'fontSize'
>;

// border
const checkboxBorder = `var(--checkbox-border, ${COLOR.LIGHT.primary300})`;
const checkboxBorderChecked = `var(--checkbox-border-checked, ${COLOR.LIGHT.blue400})`;
const checkboxBorderCheckedDisabled = `var(--checkbox-border-checked-disabled, ${COLOR.LIGHT.primary400})`;
const checkboxBorderCheckedHover = `var(--checkbox-border-checked-hover, ${COLOR.LIGHT.blue500})`;
const checkboxBorderDisabled = `var(--checkbox-border-disabled, ${COLOR.LIGHT.primary300})`;
const checkboxBorderHover = `var(--checkbox-border-hover, ${COLOR.LIGHT.blue500})`;

// background
const checkboxBackgroundChecked = `var(--checkbox-background-checked, ${COLOR.LIGHT.blue400})`;
const checkboxBackgroundCheckedDisabled = `var(--checkbox-background-checked-disabled, ${COLOR.LIGHT.primary400})`;
const checkboxBackgroundCheckedHover = `var(--checkbox-background-checked-hover, ${COLOR.LIGHT.blue500})`;
const checkboxBackgroundDisabled = `var(--checkbox-background-disabled, ${COLOR.LIGHT.primary200})`;

const checkboxText = `var(--checkbox-text, ${COLOR.LIGHT.primary900})`;
const checkboxTextHover = `var(--checkbox-text-hover, ${COLOR.LIGHT.blue500})`;
const checkboxTextDisabled = `var(--checkbox-text-disabled, ${COLOR.LIGHT.primary300})`;

// mark
const checkboxMarkChecked = `var(--checkbox-mark-checked, ${COLOR.LIGHT.primary000})`;
const checkboxMarkCheckedDisabled = `var(--checkbox-mark-checked-disabled, ${COLOR.LIGHT.primary200})`;
const checkboxMarkCheckedHover = `var(--checkbox-mark-checked-hover, ${COLOR.LIGHT.primary000})`;

const colorSet = {
  checkbox: {
    default: css`
      border: 2px solid ${checkboxBorder};
      color: ${checkboxText};
    `,
    checked: css`
      border: 2px solid ${checkboxBorderChecked};
    `,
    checkedDisabled: css`
      border: 2px solid ${checkboxBorderCheckedDisabled};
      color: ${checkboxTextDisabled};
    `,
    checkedHover: css`
      border: 2px solid ${checkboxBorderCheckedHover};
      color: ${checkboxTextHover};
    `,
    disabled: css`
      border: 2px solid ${checkboxBorderDisabled};
      color: ${checkboxTextDisabled};
    `,
    hover: css`
      border: 2px solid ${checkboxBorderHover};
      color: ${checkboxTextHover};
    `,
  },
  mark: {
    default: css`
      color: ${checkboxMarkChecked};
    `,
    checked: css`
      color: ${checkboxMarkChecked};
      background: ${checkboxBackgroundChecked};
    `,
    checkedDisabled: css`
      background: ${checkboxBackgroundCheckedDisabled};
      color: ${checkboxMarkCheckedDisabled};
    `,
    checkedHover: css`
      background: ${checkboxBackgroundCheckedHover};
      color: ${checkboxMarkCheckedHover};
    `,
    disabled: css`
      visibility: visible;
      background: ${checkboxBackgroundDisabled};
      color: ${checkboxBackgroundDisabled};
    `,
  },
  svg: {
    default: css`
      color: ${checkboxMarkChecked};
    `,
    checked: css`
      color: ${checkboxMarkChecked};
      background: ${checkboxBackgroundChecked};
    `,
    checkedDisabled: css`
      color: ${checkboxMarkCheckedDisabled};
      background: ${checkboxBackgroundCheckedDisabled};
    `,
    checkedHover: css`
      color: ${checkboxMarkCheckedHover};
      background: ${checkboxBackgroundCheckedHover};
    `,
    disabled: css`
      color: ${checkboxBackgroundDisabled};
      background: ${checkboxBackgroundDisabled};
    `,
  },
};

const Mark = styled.div<Props>`
  ${flex}
  ${({ checked, disabled }) => {
    if (checked && !disabled) {
      return colorSet.mark.checked;
    }
    if (checked && disabled) {
      return colorSet.mark.checkedDisabled;
    }

    return colorSet.mark.default;
  }}
  font-size: ${({ size }) => size}px;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: center;
  & > svg {
    transition: all 0.1s cubic-bezier(0.4, 0, 1, 1) 0ms;
    visibility: ${({ checked }) => {
      if (checked) {
        return 'visible';
      }
      return 'hidden';
    }};
    &:hover {
      ${({ disabled }) => {
        if (disabled) return null;
        return colorSet.svg.checkedHover;
      }}
    }
    ${({ checked, disabled }) => {
      if (checked && !disabled) {
        return colorSet.svg.checked;
      }
      if (checked && disabled) {
        return colorSet.svg.checkedDisabled;
      }
      if (disabled) {
        return colorSet.svg.disabled;
      }

      return colorSet.svg.default;
    }}
  }
`;

const Container = styled.div<Props>`
  ${flex}
  ${({ checked, disabled }) => {
    if (checked && !disabled) {
      return colorSet.checkbox.checked;
    }
    if (checked && disabled) {
      return colorSet.checkbox.checkedDisabled;
    }
    if (disabled) {
      return colorSet.checkbox.disabled;
    }

    return colorSet.checkbox.default;
  }}
  &:hover {
    ${({ checked, disabled }) => {
      if (disabled) return null;

      if (checked) {
        return colorSet.checkbox.checkedHover;
      }

      return colorSet.checkbox.hover;
    }}
  }
  transition: border-color 0.1s, color 0.1s;
  border-radius: 2px;
  column-gap: 8px;
  align-items: center;
  -webkit-box-align: center;
  cursor: ${({ disabled }) => (!disabled ? 'pointer' : 'not-allowed')};
  ${({ size }) => {
    return {
      width: `${size}px`,
      height: `${size}px`,
    };
  }}
  font-size: ${({ fontSize }) => fontSize}px;
`;

const Styled = {
  Container,
  Mark,
};

export default Styled;
