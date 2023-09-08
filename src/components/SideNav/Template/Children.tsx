import React from 'react';

import type { SideNavItem, SideNavKey } from '../types';
import SideNav from '../SideNav';

import type { Options } from './Template';

type Props = {
  uniqueKey: SideNavKey;
  options: Options;
  depth: number;
  navItem?: Array<SideNavItem>;
  onClick: (key: SideNavKey) => void;
} & Pick<SideNavItem, 'contents' | 'disabled'>;

function Children({
  uniqueKey,
  options,
  depth,
  contents,
  disabled,
  navItem,
  onClick,
}: Props) {
  return (
    <>
      <SideNav.Menu
        disabled={disabled}
        onClick={(e: React.MouseEvent<HTMLDivElement>) => {
          e.stopPropagation();
          onClick(uniqueKey);
        }}
        selected={options.selected === uniqueKey}
      >
        {contents}
      </SideNav.Menu>
      {Array.isArray(navItem) && (
        <SideNav.MenuGroup depth={depth} show={options.show.has(uniqueKey)}>
          {navItem.map(({ key, contents, disabled, children }) => {
            return (
              <Children
                key={key}
                uniqueKey={key}
                options={options}
                depth={depth + 1}
                disabled={disabled}
                contents={contents}
                navItem={children}
                onClick={onClick}
              />
            );
          })}
        </SideNav.MenuGroup>
      )}
    </>
  );
}

export default Children;
