import React from 'react';
import cloneDeep from 'lodash/cloneDeep';

import type { SideNavItem, SideNavKey } from '../types';

import SideNav from '../SideNav';
import Children from './Children';

type Props = {
  navItem?: Array<SideNavItem>;
  depthGap?: number;
  onClickItem?: (key: SideNavKey) => void;
};

type Options = {
  show: Set<SideNavKey>;
  selected: SideNavKey;
};

function Template({ navItem = [], depthGap = 16, onClickItem }: Props) {
  const [options, setOptions] = React.useState<Options>({
    show: new Set(),
    selected: '',
  });

  const onClick = (key: SideNavKey) => {
    setOptions((options) => {
      const newOptions = cloneDeep(options);
      if (newOptions.show.has(key)) {
        newOptions.show.delete(key);
      } else {
        newOptions.show.add(key);
      }
      newOptions.selected = key;

      return newOptions;
    });

    if (onClickItem) onClickItem(key);
  };

  return (
    <SideNav depthGap={depthGap}>
      {navItem.map(({ key, contents, disabled, children }) => {
        return (
          <Children
            key={key}
            uniqueKey={key}
            depth={1}
            options={options}
            contents={contents}
            navItem={children}
            disabled={disabled}
            onClick={onClick}
          />
        );
      })}
    </SideNav>
  );
}

export type { Options };
export default Template;
