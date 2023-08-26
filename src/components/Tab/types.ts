type OptionKey = number | string;

type Option = {
  key: OptionKey;
  contents?: React.ReactNode;
  disabled?: boolean;
};

type Direction = 'vertical' | 'horizontal';

type Size = {
  width: number;
  height: number;
};

type Offset = {
  top: number;
  left: number;
};

export type {
  OptionKey as TabOptionKey,
  Option as TabOption,
  Direction as TabDirection,
  Size,
  Offset,
};
