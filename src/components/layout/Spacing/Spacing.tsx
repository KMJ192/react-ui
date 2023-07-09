import React from 'react';

import type { COMBINE_ELEMENT_PROPS } from '@src/types/types';

type BaseProps = {
  direction?: 'horizontal' | 'vertical';
  size?: number;
};

const ELEMENT = 'div';

type Props<T extends React.ElementType> = COMBINE_ELEMENT_PROPS<T, BaseProps>;

function Spacing<T extends React.ElementType = typeof ELEMENT>(
  { direction = 'vertical', size = 0, style, ...props }: Props<T>,
  ref: React.Ref<any>,
) {
  const [_style, setStyle] = React.useState(style);

  React.useEffect(() => {
    if (direction === 'vertical') {
      setStyle({
        ...style,
        height: `${size}px`,
      });
    } else {
      setStyle({
        ...style,
        width: `${size}px`,
      });
    }
  }, [style, size, direction]);

  return <ELEMENT {...props} ref={ref} style={_style}></ELEMENT>;
}

export type SpacingProps = Props<typeof ELEMENT>;
export default React.forwardRef(Spacing) as typeof Spacing;
