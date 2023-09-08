import Text from '@src/components/Text/Text';
import type { Typo } from '@src/components/Text/types';

import classNames from 'classnames/bind';
import style from './style.module.scss';
const cx = classNames.bind(style);

type TypoMap = {
  name: string;
  typo: Typo;
  fontSize: string;
  fontWeight: string;
};
const typoMap: Array<TypoMap> = [
  {
    name: 'h1, header1',
    typo: 'h1',
    fontSize: '64px',
    fontWeight: '700',
  },
  {
    name: 'h2, header2',
    typo: 'h2',
    fontSize: '48px',
    fontWeight: '700',
  },
  {
    name: 'h3, header3',
    typo: 'h3',
    fontSize: '32px',
    fontWeight: '600',
  },
  {
    name: 't1, title1',
    typo: 't1',
    fontSize: '24px',
    fontWeight: '600',
  },
  {
    name: 't2, title2',
    typo: 't2',
    fontSize: '20px',
    fontWeight: '600',
  },
  {
    name: 's1, subtitle1',
    typo: 's1',
    fontSize: '16px',
    fontWeight: '500',
  },
  {
    name: 's2, subtitle2',
    typo: 's2',
    fontSize: '14px',
    fontWeight: '500',
  },
  {
    name: 'b1, body1',
    typo: 'b1',
    fontSize: '16px',
    fontWeight: '400',
  },
  {
    name: 'b2, body2',
    typo: 'b2',
    fontSize: '14px',
    fontWeight: '400',
  },
  {
    name: 'c1, caption1',
    typo: 'c1',
    fontSize: '12px',
    fontWeight: '400',
  },
];

function T() {
  return (
    <div className={cx('container')}>
      {typoMap.map(({ name, typo, fontSize, fontWeight }) => {
        return (
          <div key={typo} className={cx('typo')}>
            <Text typo={typo}>{name}</Text>
            <div className={cx('info')}>
              <div>font-size : {fontSize}</div>
              <div>font-weight : {fontWeight}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default T;
