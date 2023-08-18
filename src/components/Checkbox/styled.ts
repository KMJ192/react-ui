import styled from '@emotion/styled';
import { CheckboxBaseProps } from './Checkbox';
import { flex } from '../layout/Flex/styled';
import { css } from '@emotion/react';
import { COLOR } from '@src/color/color';

type Props = Pick<
  CheckboxBaseProps,
  'checked' | 'disabled' | 'size' | 'fontSize'
>;

const colorSet = {
  checkbox: {
    default: css`
      border: 2px solid var(--checkbox-border, ${COLOR.LIGHT.primary300});
      color: var(--checkbox-text, ${COLOR.LIGHT.primary900});
    `,
    checked: css`
      border: 2px solid var(--checkbox-border-checked, ${COLOR.LIGHT.blue400});
    `,
    checkedDisabled: css`
      border: 2px solid
        var(--checkbox-border-checked-disabled, ${COLOR.LIGHT.primary400});
    `,
    checkedHover: css`
      border: 2px solid
        var(--checkbox-border-checked-hover, ${COLOR.LIGHT.blue500});
    `,
    disabled: css`
      border: 2px solid
        var(--checkbox-border-disabled, ${COLOR.LIGHT.primary300});
      color: var(--checkbox-text-disabled, ${COLOR.LIGHT.primary300});
    `,
    hover: css`
      border: 2px solid var(--checkbox-border-hover, ${COLOR.LIGHT.blue500});
      color: var(--checkbox-text-hover, ${COLOR.LIGHT.blue500});
    `,
  },
  mark: {
    default: css`
      color: var(--checkbox-mark-checked, ${COLOR.LIGHT.primary000});
    `,
    checked: css`
      color: var(--checkbox-mark-checked, ${COLOR.LIGHT.primary000});
      background: var(--checkbox-background-checked, ${COLOR.LIGHT.blue400});
    `,
    checkedDisabled: css`
      background: var(
        --checkbox-background-checked-disabled,
        ${COLOR.LIGHT.primary400}
      );
      color: var(--checkbox-mark-checked-disabled, ${COLOR.LIGHT.primary200});
    `,
    checkedHover: css`
      background: var(
        --checkbox-background-checked-hover,
        ${COLOR.LIGHT.blue500}
      );
      color: var(--checkbox-mark-checked-hover, ${COLOR.LIGHT.primary000});
    `,
    disabled: css`
      visibility: visible;
      background: var(
        --checkbox-background-disabled,
        ${COLOR.LIGHT.primary200}
      );
      color: var(--checkbox-background-disabled, ${COLOR.LIGHT.primary200});
    `,
  },
  svg: {
    default: css`
      color: var(--checkbox-mark-checked, ${COLOR.LIGHT.primary000});
    `,
    checked: css`
      color: var(--checkbox-mark-checked, ${COLOR.LIGHT.primary000});
      background: var(--checkbox-background-checked, ${COLOR.LIGHT.blue400});
    `,
    checkedDisabled: css`
      color: var(--checkbox-mark-checked-disabled, ${COLOR.LIGHT.primary200});
      background: var(
        --checkbox-background-checked-disabled,
        ${COLOR.LIGHT.primary400}
      );
    `,
    checkedHover: css`
      color: var(--checkbox-mark-checked-hover, ${COLOR.LIGHT.primary000});
      background: var(
        --checkbox-background-checked-hover,
        ${COLOR.LIGHT.blue500}
      );
    `,
    disabled: css`
      color: var(--checkbox-background-disabled, ${COLOR.LIGHT.primary200});
      background: var(
        --checkbox-background-disabled,
        ${COLOR.LIGHT.primary200}
      );
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
