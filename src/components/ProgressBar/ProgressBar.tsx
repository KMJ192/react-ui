import React from 'react';
import Styled from './styled';

import type { OVER_RIDABLE_PROPS } from '@src/types/types';

type BaseProps = {
  width?: number | string;
  height?: number | string;
  percent?: number;
  isPending?: boolean;
};

type Props<T extends React.ElementType> = OVER_RIDABLE_PROPS<T, BaseProps>;

const DEFAULT_ELEMENT = 'div';

function ProgressBar<T extends React.ElementType = typeof DEFAULT_ELEMENT>(
  {
    as,
    width,
    height,
    percent = 0,
    isPending = false,
    className,
    ...props
  }: Props<T>,
  ref: React.Ref<any>,
) {
  const ELEMENT = as || DEFAULT_ELEMENT;

  return (
    <Styled.Container
      {...props}
      as={ELEMENT}
      ref={ref}
      className={className}
      width={width}
      height={height}
    >
      <Styled.Bar percent={percent}>
        {isPending && <Styled.Pending></Styled.Pending>}
      </Styled.Bar>
    </Styled.Container>
  );
}

type ProgressBarProps = Props<typeof DEFAULT_ELEMENT>;
export type { ProgressBarProps, BaseProps as ProgressBarBaseProps };
export default React.forwardRef(ProgressBar) as typeof ProgressBar;
