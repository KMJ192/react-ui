type Header1 = 'h1' | 'header1';
type Header2 = 'h2' | 'header2';
type Header3 = 'h3' | 'header3';
type Title1 = 't1' | 'title1';
type Title2 = 't2' | 'title2';
type Subtitle1 = 's1' | 'subtitle1';
type Subtitle2 = 's2' | 'subtitle2';
type Body1 = 'b1' | 'body1';
type Body2 = 'b2' | 'body2';
type Caption = 'c1' | 'caption1';

type Typo =
  | Header1
  | Header2
  | Header3
  | Title1
  | Title2
  | Subtitle1
  | Subtitle2
  | Body1
  | Body2
  | Caption;

// type Bold = 'bold';
// type SemiBold = 'semi-bold';
// type Medium = 'medium';
// type Regular = 'regular';

// type FontWeight = Bold | SemiBold | Medium | Regular;

export type { Typo };
