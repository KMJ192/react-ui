import styled from '@emotion/styled';
import { flex } from '../../layout/Flex/styled';
import { InputBaseProps } from './Input';
import { css } from '@emotion/react';
import { COLOR } from '@src/color/color';

type IsIcon = {
  isLeftIcon: boolean;
  isRightIcon: boolean;
};

type Props = Required<
  Pick<
    InputBaseProps,
    | 'error'
    | 'fontSize'
    | 'paddingTop'
    | 'paddingBottom'
    | 'paddingLeft'
    | 'paddingRight'
  >
> &
  IsIcon;

type IconProps = Required<
  Pick<InputBaseProps, 'leftIconPos' | 'rightIconPos'>
> &
  IsIcon;

const inputBorder = `var(--input-border, ${COLOR.LIGHT.primary400})`;
const inputBorderFocus = `var(--input-border-focus, ${COLOR.LIGHT.blue500})`;
const inputBorderError = `var(--input-border-error, ${COLOR.LIGHT.red900})`;
const inputBorderDisabled = `var(--input-border-disabled, ${COLOR.LIGHT.primary300})`;

const inputBackground = `var(--input-background, ${COLOR.LIGHT.primary000})`;
const inputBackgroundDisabled = `var(--input-background-disabled, ${COLOR.LIGHT.primary100})`;

const inputText = `var(--input-text, ${COLOR.LIGHT.primary900})`;
const inputTextDisabled = `var(--input-text-disabled, ${COLOR.LIGHT.primary400})`;

const inputPlaceholder = `var(--input-placeholder, ${COLOR.LIGHT.primary400})`;
const inputPlaceholderDisabled = `var(--input-placeholder-disabled, ${COLOR.LIGHT.primary300})`;

const inputBoxShadow = `var(--input-box-shadow, 0px 3px 6px rgba(62, 62, 62, 0.1))`;

const colorSet = (error: boolean) => {
  return css`
    border-color: ${error ? inputBorderError : inputBorder};
    background: ${inputBackground};
    color: ${inputText};
    &::placeholder {
      color: ${inputPlaceholder};
    }

    &:disabled {
      border-color: ${inputBorderDisabled};
      background: ${inputBackgroundDisabled};
      color: ${inputTextDisabled};
      &::placeholder {
        color: ${inputPlaceholderDisabled};
      }
    }

    ${!error &&
    css`
      &:focus {
        border-color: ${inputBorderFocus};
        box-shadow: ${inputBoxShadow};
      }
    `}
  `;
};

const Container = styled.div<IsIcon>`
  ${flex}
  position: relative;
  align-items: center;
  -webkit-box-align: center;
`;

const Input = styled.input<Props>`
  width: 100%;
  border: 1px solid;
  border-radius: 4px;
  padding-top: ${({ paddingTop }) => paddingTop}px;
  padding-bottom: ${({ paddingBottom }) => paddingBottom}px;
  padding-left: ${({ paddingLeft }) => paddingLeft}px;
  padding-right: ${({ paddingRight }) => paddingRight}px;
  &:focus {
    outline: none;
  }
  &:disabled {
    cursor: not-allowed;
  }
  ${({ error }) => colorSet(error)}
`;

const Icon = styled.div<IconProps>`
  position: absolute;
  aspect-ratio: 1;
  ${({ isRightIcon, rightIconPos, leftIconPos }) => {
    if (isRightIcon) {
      return css`
        right: ${rightIconPos}px;
      `;
    }
    return css`
      left: ${leftIconPos}px;
    `;
  }}
`;

const Styled = {
  Container,
  Input,
  Icon,
};

export default Styled;
