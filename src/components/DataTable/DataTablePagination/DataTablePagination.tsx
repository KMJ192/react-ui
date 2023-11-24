import React from 'react';
import PaginationIcon from './PaginationIcon';
import PaginationEndIcon from './PaginationEndIcon';

import Text from '@src/components/Text/Text';

import type { OVER_RIDABLE_PROPS } from '@src/types/types';

import classNames from 'classnames/bind';
import style from '@css/components/DataTable/style.module.scss';
const cx = classNames.bind(style);

type BaseProps = {
  selectedPageIndex?: number;
  currentPaging?: number;
  lastPageIndex?: number;
  onClickPaging?: (move: 'prev' | 'next' | 'first' | 'last') => void;
  onClickPageIndex?: (idx: number) => void;
};

const DEFAULT_ELEMENT = 'div';

type Props<T extends React.ElementType> = OVER_RIDABLE_PROPS<T, BaseProps>;

const perPage = 10;

function DataTablePagination<
  T extends React.ElementType = typeof DEFAULT_ELEMENT,
>(
  {
    as,
    selectedPageIndex = 1,
    currentPaging = 1,
    lastPageIndex = 1,
    onClickPageIndex = () => {},
    onClickPaging = () => {},
    className,
    ...props
  }: Props<T>,
  ref: React.Ref<React.ElementRef<typeof DEFAULT_ELEMENT>>,
) {
  const ELEMENT = as || DEFAULT_ELEMENT;
  const isFirst = currentPaging === 1;
  const isLast = currentPaging >= lastPageIndex / perPage;

  return (
    <ELEMENT {...props} ref={ref} className={cx('pagination', className)}>
      <div className={cx('prev', isFirst && 'first-page')}>
        <div
          onClick={(e: React.MouseEvent) => {
            e.stopPropagation();
            if (!isFirst) onClickPaging('first');
          }}
        >
          <PaginationEndIcon />
        </div>
        <div
          onClick={(e: React.MouseEvent) => {
            e.stopPropagation();
            if (!isFirst) onClickPaging('prev');
          }}
        >
          <PaginationIcon />
        </div>
      </div>
      <ul className={cx('index-list')}>
        {Array.from({ length: perPage }, () => 0).map((_, idx) => {
          const page = idx + 1 + perPage * (currentPaging - 1);
          const isSelected = page === selectedPageIndex;
          const isOver = page > lastPageIndex;
          return (
            <li
              key={page}
              className={cx(
                'index',
                isSelected && 'selected',
                isOver && 'over',
              )}
              onClick={(e: React.MouseEvent) => {
                e.stopPropagation();
                if (!isOver) onClickPageIndex(page);
              }}
            >
              <Text typo='b2'>{page}</Text>
            </li>
          );
        })}
      </ul>
      <div className={cx('next', isLast && 'last-page')}>
        <div
          onClick={(e: React.MouseEvent) => {
            e.stopPropagation();
            if (!isLast) onClickPaging('next');
          }}
        >
          <PaginationIcon />
        </div>
        <div
          onClick={(e: React.MouseEvent) => {
            e.stopPropagation();
            if (!isLast) onClickPaging('last');
          }}
        >
          <PaginationEndIcon />
        </div>
      </div>
    </ELEMENT>
  );
}

export type DataTablePaginationProps = Props<typeof DEFAULT_ELEMENT>;
export default React.forwardRef(
  DataTablePagination,
) as typeof DataTablePagination;
