import styled from '@emotion/styled';
import { flex } from '@src/Legacy/layout/Flex/styled';
import { InputBaseProps } from './Input';
import { css } from '@emotion/react';
import { COLOR } from '@src/Legacy/color/color';

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

const inputBorder = `var(--inputBorder, ${COLOR.LIGHT.primary400})`;
const inputBorderFocus = `var(--inputBorderFocus, ${COLOR.LIGHT.blue500})`;
const inputBorderError = `var(--inputBorderError, ${COLOR.LIGHT.red900})`;
const inputBorderDisabled = `var(--inputBorderDisabled, ${COLOR.LIGHT.primary300})`;

const inputBackground = `var(--inputBackground, ${COLOR.LIGHT.primary000})`;
const inputBackgroundDisabled = `var(--inputBackgroundDisabled, ${COLOR.LIGHT.primary100})`;

const inputText = `var(--inputText, ${COLOR.LIGHT.primary900})`;
const inputTextDisabled = `var(--inputTextDisabled, ${COLOR.LIGHT.primary400})`;

const inputPlaceholder = `var(--inputPlaceholder, ${COLOR.LIGHT.primary400})`;
const inputPlaceholderDisabled = `var(--inputPlaceholderDisabled, ${COLOR.LIGHT.primary300})`;

const inputBoxShadow = `var(--inputBoxShadow, 0px 3px 6px rgba(62, 62, 62, 0.1))`;

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
