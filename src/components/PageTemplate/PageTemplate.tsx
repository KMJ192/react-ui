import React from 'react';
import {
  type SideNavItem,
  SideNavTemplate,
  SideNavKey,
} from '@src/components/SideNav';
import Flex from '@src/layout/Flex/Flex';
import Header from '@src/components/Header/Header';
import Footer from '@src/components/Footer/Footer';

import type { OVER_RIDABLE_PROPS } from '@src/types/types';

import classNames from 'classnames/bind';
import style from './style.module.scss';
const cx = classNames.bind(style);

type BaseProps = {
  menu?: Array<SideNavItem>;
  children?: React.ReactNode;
  isHide?: boolean;
  onClickItem?: (key: SideNavKey) => void;
};

const DEFAULT_ELEMENT = 'div';

type Props<T extends React.ElementType> = OVER_RIDABLE_PROPS<T, BaseProps>;

function PageTemplate<T extends React.ElementType = typeof DEFAULT_ELEMENT>(
  {
    as,
    menu = [],
    isHide = false,
    onClickItem,
    children,
    className,
    ...props
  }: Props<T>,
  ref: React.Ref<React.ElementRef<typeof DEFAULT_ELEMENT>>,
) {
  const ELEMENT = as || DEFAULT_ELEMENT;

  return (
    <Flex
      ref={ref}
      as={ELEMENT as any}
      className={cx('page-template', isHide && 'hide-gnb', 'dark', className)}
      {...props}
    >
      <SideNavTemplate
        className={cx('gnb')}
        navItem={menu}
        onClickItem={onClickItem}
      />
      <Header className={cx('header')}></Header>
      <div className={cx('contents')}>
        <section className={cx('page')}>{children}</section>
        <Footer className={cx('footer')}></Footer>
      </div>
    </Flex>
  );
}

export type PageTemplateProps = Props<typeof DEFAULT_ELEMENT>;
export default React.forwardRef(PageTemplate) as typeof PageTemplate;
