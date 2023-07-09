import React from 'react';

import type { COMBINE_ELEMENT_PROPS } from '@src/types/types';

import Header from '@src/components/molecules/Header/Header';
import type { HeaderProps } from '@src/components/molecules/Header/Header';
import Footer from '@src/components/molecules/Footer/Footer';
import type { FooterProps } from '@src/components/molecules/Footer/Footer';
import SideNav from '@src/components/molecules/SideNav/SideNav';
import type { SideNavProps } from '@src/components/molecules/SideNav/SideNav';
import Page from './Page';
import type { PageProps } from './Page';

import classNames from 'classnames/bind';
import style from './style.module.scss';
const cx = classNames.bind(style);

type BaseProps = {
  children?: React.ReactNode;
};

const ELEMENT = 'div';

type Props<T extends React.ElementType> = COMBINE_ELEMENT_PROPS<T, BaseProps>;

function PageTemplate<T extends React.ElementType = typeof ELEMENT>(
  { children, className, ...props }: Props<T>,
  ref: React.Ref<any>,
) {
  return (
    <ELEMENT {...props} ref={ref} className={cx('page-template', className)}>
      <>
        <section className={cx('header')}>
          {React.Children.map(children, (child) => {
            if (React.isValidElement(child)) {
              const isHeader =
                child.type ===
                (Header as unknown as React.JSXElementConstructor<HeaderProps>);
              if (isHeader) {
                return child;
              }
            }
            return null;
          })}
        </section>
        <section className={cx('contents')}>
          <div className={cx('side-nav')}>
            {React.Children.map(children, (child) => {
              if (React.isValidElement(child)) {
                const isSideNav =
                  child.type ===
                  (SideNav as unknown as React.JSXElementConstructor<SideNavProps>);
                if (isSideNav) {
                  return child;
                }
              }
              return null;
            })}
          </div>
          <div className={cx('page-contents')}>
            {React.Children.map(children, (child) => {
              if (React.isValidElement(child)) {
                const isFooter =
                  child.type ===
                  (Footer as unknown as React.JSXElementConstructor<FooterProps>);
                const isPage =
                  child.type ===
                  (Page as unknown as React.JSXElementConstructor<PageProps>);
                if (isFooter) {
                  return <div className={cx('footer')}>{child}</div>;
                }
                if (isPage) {
                  return <div className={cx('page')}>{child}</div>;
                }
              }

              return null;
            })}
          </div>
        </section>
      </>
    </ELEMENT>
  );
}

export type PageTemplateProps = Props<typeof ELEMENT>;
export default Object.assign(
  React.forwardRef(PageTemplate) as typeof PageTemplate,
  {
    Header,
    Footer,
    SideNav,
    Page,
  },
);
