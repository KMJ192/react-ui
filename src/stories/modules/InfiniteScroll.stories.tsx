import { useState } from 'react';
import type { StoryFn, Meta } from '@storybook/react';

import InfiniteScroll, {
  type InfiniteScrollProps,
} from '@src/modules/InfiniteScroll/InfiniteScroll';
// import {
//   InfiniteScroll,
//   type InfiniteScrollProps,
// } from '@cdkit/react-modules';

import classNames from 'classnames/bind';
import style from './style.module.scss';
const cx = classNames.bind(style);

const meta: Meta<typeof InfiniteScroll> = {
  title: 'UI/Modules/InfiniteScroll',
  component: InfiniteScroll,
  parameters: {
    componentSubtitle: 'InfiniteScroll',
  },
  argTypes: {},
};

function sleep(ms: number) {
  return new Promise((res) => {
    setTimeout(res, ms);
  });
}

const Template = () => {
  const [loading, setLoading] = useState(false);
  const [arr, setArr] = useState(Array.from({ length: 50 }, () => 0));

  const onLoad = async () => {
    setLoading(true);
    await sleep(1000);
    setArr((arr) => {
      return [...arr, ...Array.from({ length: 50 }, () => 0)];
    });
    setLoading(false);
  };

  return (
    <InfiniteScroll
      isLoading={loading}
      loadingElement={<div className={cx('loader')}>Loading...</div>}
      onLoad={onLoad}
      className={cx('container')}
    >
      {arr.map((num, idx) => {
        return (
          <div className={cx('element')} key={`${num}-${idx}`}>
            {idx + 1}
          </div>
        );
      })}
    </InfiniteScroll>
  );
};

export const InfiniteScrollStory: StoryFn<InfiniteScrollProps> = Template.bind(
  {},
);
InfiniteScrollStory.args = {};

export default meta;
