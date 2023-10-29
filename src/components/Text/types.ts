type Header1 = 'h1' | 'header1';
type Header2 = 'h2' | 'header2';
type Header3 = 'h3' | 'header3';
type Header4 = 'h4' | 'header4';
type Title1 = 't1' | 'title1';
type Title2 = 't2' | 'title2';
type Title3 = 't3' | 'title3';
type Subtitle1 = 's1' | 'subtitle1';
type Subtitle2 = 's2' | 'subtitle2';
type Subtitle3 = 's3' | 'subtitle3';
type Body1 = 'b1' | 'body1';
type Body2 = 'b2' | 'body2';
type Body3 = 'b3' | 'body3';
type Caption1 = 'c1' | 'caption1';
type Caption2 = 'c2' | 'caption2';

type Typo =
  | Header1
  | Header2
  | Header3
  | Header4
  | Title1
  | Title2
  | Title3
  | Subtitle1
  | Subtitle2
  | Subtitle3
  | Body1
  | Body2
  | Body3
  | Caption1
  | Caption2;

type FontWeight =
  | '100'
  | '200'
  | '300'
  | '400'
  | '500'
  | '600'
  | '700'
  | '800'
  | '900'
  | 'bold'
  | 'bolder'
  | 'lighter'
  | 'normal';

export type { Typo, FontWeight };
