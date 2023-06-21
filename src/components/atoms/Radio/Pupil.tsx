import classNames from 'classnames/bind';
import style from './style.module.scss';
const cx = classNames.bind(style);

function Pupil() {
  return (
    <div className={cx('pupil')}>
      <svg
        focusable='false'
        width='1em'
        height='1em'
        viewBox='0 0 18 18'
        fill='none'
      >
        <circle cx='9' cy='9' r='8.5' className={cx('pupil', 'outer')} />
        <circle cx='9' cy='9' r='5' className={cx('pupil', 'inner')} />
      </svg>
    </div>
  );
}

export default Pupil;
