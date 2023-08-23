type Variant = 'primary' | 'outline' | 'clear';

type Shape = 'rect' | 'circle' | 'square';

type Color = Partial<{
  background: string;
  text: string;
  boxShadow: string;
  outline: string;
}>;

export type { Shape, Variant, Color as ButtonColor };
