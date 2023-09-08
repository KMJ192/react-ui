import PaginationIcon from './PaginationIcon';

import Center from '@src/layout/Center/Center';

import classNames from 'classnames/bind';
import style from '../style.module.scss';
const cx = classNames.bind(style);

type Props = {
  pageCnt: number;
  selectedPage: number;
  paginationCnt: number;
  onClickPagination: (move: 'left' | 'right') => void;
  onClickPageIndex: (idx: number) => void;
};

function Pagination({
  pageCnt,
  selectedPage,
  paginationCnt,
  onClickPageIndex,
  onClickPagination,
}: Props) {
  return (
    <Center className={cx('pagination')}>
      <div
        className={cx('left')}
        onClick={() => {
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
            onClick={() => {
              onClickPageIndex(page);
            }}
          >
            {page}
          </Center>
        );
      })}
      <div
        className={cx('right')}
        onClick={() => {
          onClickPagination('right');
        }}
      >
        <PaginationIcon />
      </div>
    </Center>
  );
}

export default Pagination;
