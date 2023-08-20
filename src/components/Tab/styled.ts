import styled from '@emotion/styled';
import { css } from '@emotion/react';

import { flex } from '../layout/Flex/styled';

import type { Option, TabLineStyle } from './types';
import type { TabBaseProps } from './Tab';
import { COLOR } from '@src/color/color';

type TabLineProps = Pick<TabBaseProps, 'direction'> &
  TabLineStyle & {
    isFirst: boolean;
    isLast: boolean;
  };

type OptionsProps = Pick<TabBaseProps, 'direction'>;

type OptionProps = Pick<Option, 'disabled'>;

const tabBackground = `var(--tab-background, ${COLOR.LIGHT.primary000})`;
const tabBackgroundHover = `var(--tab-background-hover, ${COLOR.LIGHT.blue100})`;
const tabBackgroundDisabled = `var(--tab-background-disabled, ${COLOR.LIGHT.primary100})`;

const tabSelectLine = `var(--tab-select-line, ${COLOR.LIGHT.blue200})`;

const tabText = `var(--tab-text, ${COLOR.LIGHT.primary900})`;
const tabTextHover = `var(--tab-text-hover, ${COLOR.LIGHT.primary800})`;
const tabTextDisabled = `var(--tab-text-disabled, ${COLOR.LIGHT.primary500})`;

const colorSet = {
  container: {
    default: css`
      background: ${tabBackground};
    `,
  },
  option: {
    default: css`
      color: ${tabText};
    `,
    disabled: css`
      color: ${tabTextDisabled};
      background: ${tabBackgroundDisabled};
    `,
    hover: css`
      color: ${tabTextHover};
      background: ${tabBackgroundHover};
    `,
  },
  tabLine: {
    default: css`
      background: ${tabSelectLine};
    `,
  },
};

const Option = styled.li<OptionProps>`
  ${({ disabled }) => {
    if (disabled) return colorSet.option.disabled;
    return colorSet.option.default;
  }}
  &:hover {
    ${({ disabled }) => {
      if (!disabled) return colorSet.option.hover;
      return null;
    }}
  }
  position: relative;
  height: 100%;
  transition: background-color 0.2s;
  padding: 16px;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  &:first-child {
    border-bottom-left-radius: 4px;
    border-top-left-radius: 4px;
  }
  &:last-child {
    border-bottom-right-radius: 4px;
    border-top-right-radius: 4px;
  }
`;

const Options = styled.ul<OptionsProps>`
  ${flex}
  list-style: none;
  flex-direction: ${({ direction }) =>
    direction === 'horizontal' ? 'row' : 'column'};
`;

const TabLine = styled.div<TabLineProps>`
  ${colorSet.tabLine.default}
  position: absolute;
  transition: all 0.2s;
  z-index: 1;
  ${({ direction, isFirst, isLast, left, top, width, height }) => {
    if (direction === 'horizontal') {
      const dir = css`
        height: 4px;
        bottom: 0;
        left: ${left}px;
        width: ${width}px;
      `;
      if (isFirst) {
        return css`
          ${dir}
          border-bottom-left-radius: 4px;
        `;
      }
      if (isLast) {
        return css`
          ${dir}
          border-bottom-right-radius: 4px;
        `;
      }

      return dir;
    }
    const dir = css`
      left: 0;
      width: 4px;
      top: ${top}px;
      height: ${height}px;
    `;
    if (isFirst) {
      return css`
        ${dir}
        border-top-left-radius: 4px;
      `;
    }
    if (isLast) {
      return css`
        ${dir}
        border-bottom-left-radius: 4px;
      `;
    }

    return dir;
  }}
`;

const Container = styled.div`
  ${colorSet.container.default}
  position: relative;
  width: fit-content;
  height: fit-content;
  border-radius: 4px;
  align-items: center;
`;

const Styled = {
  Container,
  TabLine,
  Options,
  Option,
};

export default Styled;
