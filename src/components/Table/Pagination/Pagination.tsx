import React from 'react';
import PaginationIcon from './PaginationIcon';

import Center from '@src/layout/Center/Center';

import type { OVER_RIDABLE_PROPS } from '@src/types/types';

import classNames from 'classnames/bind';
import style from '../style.module.scss';
const cx = classNames.bind(style);

type BaseProps = {
  pageCnt?: number;
  selectedPage: number;
  paginationCnt?: number;
  onClickPagination?: (move: 'left' | 'right') => void;
  onClickPageIndex?: (idx: number) => void;
};

const DEFAULT_ELEMENT = 'div';

type Props<T extends React.ElementType> = OVER_RIDABLE_PROPS<T, BaseProps>;

function Pagination<T extends React.ElementType = typeof DEFAULT_ELEMENT>(
  {
    as,
    pageCnt = 1,
    selectedPage = 1,
    paginationCnt = 1,
    onClickPageIndex = () => {},
    onClickPagination = () => {},
    className,
    ...props
  }: Props<T>,
  ref: React.Ref<any>,
) {
  const ELEMENT = as || DEFAULT_ELEMENT;

  return (
    <Center
      {...props}
      ref={ref}
      as={ELEMENT as any}
      className={cx('pagination', className)}
    >
      <div
        className={cx('left')}
        onClick={(e: React.MouseEvent) => {
          e.stopPropagation();
          onClickPagination('left');
        }}
      >
        <PaginationIcon />
      </div>
      {Array.from({ length: pageCnt }, () => 0).map((_, idx) => {
        const page = idx + 1 + pageCnt * (paginationCnt - 1);
        const isSelected = page === selectedPage;
        return (
          <Center
            as='li'
            key={page}
            className={cx('index', isSelected && 'selected')}
            onClick={(e: React.MouseEvent) => {
              e.stopPropagation();
              onClickPageIndex(page);
            }}
          >
            {page}
          </Center>
        );
      })}
      <div
        className={cx('right')}
        onClick={(e: React.MouseEvent) => {
          e.stopPropagation();
          onClickPagination('right');
        }}
      >
        <PaginationIcon />
      </div>
    </Center>
  );
}

export type TablePaginationProps = Props<typeof DEFAULT_ELEMENT>;
export default React.forwardRef(Pagination) as typeof Pagination;
