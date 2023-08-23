import React from 'react';

import type { COMBINE_ELEMENT_PROPS } from '@src/types/types';

import classNames from 'classnames/bind';
import style from './style.module.scss';
const cx = classNames.bind(style);

type BaseProps = {
  percent?: number;
  isPending?: boolean;
  height?: number;
};

const ELEMENT = 'div';

type Props<T extends React.ElementType> = COMBINE_ELEMENT_PROPS<T, BaseProps>;

function Progressbar<T extends React.ElementType = typeof ELEMENT>(
  {
    className,
    percent = 0,
    isPending = false,
    height,
    style,
    ...props
  }: Props<T>,
  ref: React.Ref<any>,
) {
  const isHeight = typeof height === 'number';
  const _style = isHeight
    ? {
        ...style,
        height,
      }
    : style;

  return (
    <ELEMENT
      {...props}
      ref={ref}
      style={_style}
      className={cx('progressbar', className)}
    >
      <div
        className={cx('bar')}
        style={{
          width: `${percent > 100 ? 100 : percent}%`,
        }}
      >
        {isPending && <div className={cx('pending')}></div>}
      </div>
    </ELEMENT>
  );
}

export type ProgressBarProps = Props<typeof ELEMENT>;
export default React.forwardRef(Progressbar) as typeof Progressbar;
