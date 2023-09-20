import useSelectState from '../store/hooks/useSelectState';

import classNames from 'classnames/bind';
import style from './style.module.scss';
const cx = classNames.bind(style);

type Props = {
  className?: string;
};

function ExpandIcon({ className }: Props) {
  const { open, disabled } = useSelectState();

  return (
    <svg
      className={cx('expand-icon', { open }, { disabled }, className)}
      viewBox='0 0 20 20'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M16.25 7.5L10 13.75L3.75 7.5'
        stroke='currentColor'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
}

export default ExpandIcon;
