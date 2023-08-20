import styled from '@emotion/styled';
import { css } from '@emotion/react';

import { flex } from '../layout/Flex/styled';
import { verticalCenter } from '../layout/Center/styled';

import { COLOR } from '@src/color/color';

import type { SwitchBaseProps } from './Switch';

type Props = Required<Pick<SwitchBaseProps, 'checked' | 'disabled'>>;

type SwitchBodyProps = Props &
  Required<Pick<SwitchBaseProps, 'width' | 'height'>>;

type BulletProps = Props &
  Required<Pick<SwitchBaseProps, 'bulletSize' | 'width'>>;

type ChildrenProps = Props & Required<Pick<SwitchBaseProps, 'fontSize'>>;

const switchBackground = `var(--switch-background, ${COLOR.LIGHT.primary300})`;
const switchBackgroundChecked = `var(--switch-background-checked, ${COLOR.LIGHT.blue400})`;
const switchBackgroundCheckedDisabled = ` var(--switch-background-checked-disabled, ${COLOR.LIGHT.primary300})`;
const switchBackgroundCheckedHover = `var(--switch-background-checked-hover, ${COLOR.LIGHT.blue500})`;
const switchBackgroundDisabled = `var(--switch-background-disabled, ${COLOR.LIGHT.primary100})`;
const switchBackgroundHover = `var(--switch-background-hover, ${COLOR.LIGHT.blue200})`;

const switchBullet = `var(--switch-bullet, ${COLOR.LIGHT.primary000})`;
const switchBulletChecked = `var(--switch-bullet-checked, ${COLOR.LIGHT.primary000})`;
const switchBulletCheckedDisabled = `var(--switch-bullet-checked-disabled, ${COLOR.LIGHT.primary200})`;
const switchBulletCheckedHover = `var(--switch-bullet-checked-hover, ${COLOR.LIGHT.primary000})`;
const switchBulletDisabled = `var(--switch-bullet-disabled, ${COLOR.LIGHT.primary200})`;
const switchBulletHover = `var(--switch-bullet-hover, ${COLOR.LIGHT.primary000})`;
const switchBulletBoxShadow = `var(--switch-bullet-box-shadow, 0px 3px 6px rgba(63, 63, 63, 0.3))`;

const switchText = `var(--switch-text, ${COLOR.LIGHT.primary900})`;
const switchTextHover = `var(--switch-text-hover, ${COLOR.LIGHT.blue500})`;
const switchTextDisabled = `var(--switch-text-disabled, ${COLOR.LIGHT.primary300})`;

const colorSet = {
  body: {
    default: css`
      background: ${switchBackground};
    `,
    checked: css`
      background: ${switchBackgroundChecked};
    `,
    checkedDisabled: css`
      background: ${switchBackgroundCheckedDisabled};
    `,
    checkedHover: css`
      background: ${switchBackgroundCheckedHover};
    `,
    disabled: css`
      background: ${switchBackgroundDisabled};
    `,
    hover: css`
      background: ${switchBackgroundHover};
    `,
  },
  bullet: {
    default: css`
      background: ${switchBullet};
      box-shadow: ${switchBulletBoxShadow};
    `,
    checked: css`
      background: ${switchBulletChecked};
      box-shadow: ${switchBulletBoxShadow};
    `,
    checkedDisabled: css`
      background: ${switchBulletCheckedDisabled};
    `,
    checkedHover: css`
      background: ${switchBulletCheckedHover};
      box-shadow: ${switchBulletBoxShadow};
    `,
    disabled: css`
      background: ${switchBulletDisabled};
    `,
    hover: css`
      background: ${switchBulletHover};
      box-shadow: ${switchBulletBoxShadow};
    `,
  },
  children: {
    default: css`
      color: ${switchText};
    `,
    disabled: css`
      color: ${switchTextDisabled};
    `,
    hover: css`
      color: ${switchTextHover};
    `,
  },
};

const SwitchBody = styled.div<SwitchBodyProps>`
  ${flex}
  ${verticalCenter}
  border-radius: 16px;
  transition: background-color 0.1s ease;
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
  position: relative;
  ${({ disabled, checked }) => {
    if (checked && disabled) return colorSet.body.checkedDisabled;

    if (checked && !disabled) return colorSet.body.checked;

    if (disabled) return colorSet.body.disabled;

    return colorSet.body.default;
  }}
`;

const SwitchBullet = styled.div<BulletProps>`
  position: absolute;
  border-radius: 50%;
  transition: left 0.2s ease;
  width: ${({ bulletSize }) => bulletSize}px;
  height: ${({ bulletSize }) => bulletSize}px;
  ${({ checked, width, bulletSize }) => {
    if (checked) {
      return css`
        left: ${width - bulletSize - 4}px;
      `;
    }
    return css`
      left: 4px;
    `;
  }}
  ${({ disabled, checked }) => {
    if (checked && disabled) return colorSet.bullet.checkedDisabled;

    if (checked && !disabled) return colorSet.bullet.checked;

    if (disabled) return colorSet.bullet.disabled;

    return colorSet.bullet.default;
  }}
`;

const Children = styled.span<ChildrenProps>`
  font-size: ${({ fontSize }) => fontSize}px;
  ${({ disabled }) => {
    if (disabled) return colorSet.children.disabled;

    return colorSet.children.default;
  }}
`;

const Container = styled.div<Props>`
  ${flex}
  ${verticalCenter}
  column-gap: 8px;
  width: fit-content;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  &:hover {
    ${({ disabled, checked }) => {
      if (disabled) return null;
      if (checked) {
        return css`
          .switch-body {
            ${colorSet.body.checkedHover}
          }
          .switch-bullet {
            ${colorSet.bullet.checkedHover}
          }
          .switch-children {
            ${colorSet.children.hover}
          }
        `;
      }

      return css`
        .switch-body {
          ${colorSet.body.hover}
        }
        .switch-bullet {
          ${colorSet.bullet.hover}
        }
        .switch-children {
          ${colorSet.children.hover}
        }
      `;
    }}
  }
`;

const Styled = {
  Container,
  SwitchBody,
  SwitchBullet,
  Children,
};

export default Styled;
