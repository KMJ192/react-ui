import { forwardRef, isValidElement } from 'react';
import type { ReactNode, ElementType, Ref } from 'react';

import type { OVER_RIDABLE_PROPS } from '@src/types/types';

import classNames from 'classnames/bind';
import style from './Menu.module.scss';
const cx = classNames.bind(style);

type BaseProps = {
  selected?: boolean;
  left?: ReactNode;
  right?: ReactNode;
  children?: ReactNode;
};

const ELEMENT = 'div';

type Props<T extends ElementType> = OVER_RIDABLE_PROPS<T, BaseProps>;

function Menu<T extends ElementType = typeof ELEMENT>(
  { selected = false, left, right, children, className, ...props }: Props<T>,
  ref: Ref<any>,
) {
  return (
    <ELEMENT {...props} ref={ref} className={cx('menu', className)}>
      <div className={cx('item', selected && 'select')}>
        <div className={cx('left')}>
          {isValidElement(left) && <div className={cx('icon')}>{left}</div>}
          <div className={cx('contents')}>{children}</div>
        </div>
        {isValidElement(right) && <div className={cx('right')}>{right}</div>}
      </div>
    </ELEMENT>
  );
}

export default forwardRef(Menu) as typeof Menu;
