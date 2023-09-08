import Flex from '@src/layout/Flex/Flex';

import classNames from 'classnames/bind';
import style from './style.module.scss';
const cx = classNames.bind(style);

type Props = {
  multiple: boolean;
};

function Mark({ multiple }: Props) {
  return (
    <Flex className={cx('mark')}>
      {multiple ? (
        <svg
          width='1em'
          height='1em'
          viewBox='0 0 12 12'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M3 6H9'
            stroke='currentColor'
            strokeWidth='1.5'
            strokeLinecap='round'
          />
        </svg>
      ) : (
        <svg
          width='1em'
          height='1em'
          viewBox='0 0 16 16'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M13.1562 4.71875L6.59375 11.2812L3.3125 8'
            stroke='currentColor'
            strokeWidth='1.8'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </svg>
      )}
    </Flex>
  );
}

export default Mark;
