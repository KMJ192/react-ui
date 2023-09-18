import React from 'react';
import cloneDeep from 'lodash/cloneDeep';

import type { SideNavItem, SideNavKey } from '../types';

import SideNav from '../SideNav';
import Children from './Children';

import type { COMBINE_ELEMENT_PROPS } from '@src/types/types';

type BaseProps = {
  navItem?: Array<SideNavItem>;
  depthGap?: number;
  onClickItem?: (key: SideNavKey) => void;
};

type Options = {
  show: Set<SideNavKey>;
  selected: SideNavKey;
};

const ELEMENT = 'nav';

type Props<T extends React.ElementType> = COMBINE_ELEMENT_PROPS<T, BaseProps>;

function Template<T extends React.ElementType = typeof ELEMENT>(
  { navItem = [], depthGap = 16, onClickItem, ...props }: Props<T>,
  ref: React.Ref<React.ElementRef<typeof ELEMENT>>,
) {
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
    <SideNav {...props} ref={ref} depthGap={depthGap}>
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
export default React.forwardRef(Template) as typeof Template;
