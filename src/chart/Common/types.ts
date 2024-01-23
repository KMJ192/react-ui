interface ChartComponentStrategy {
  readonly name: string;
  styleUpdate: (args: any) => void;
  renderer: () => void;
  reload: () => void;
}

type ChartComponent = new () => ChartComponentStrategy;

interface ChartStrategy {
  load: (args: any) => void;
}

type Size = {
  width: number;
  height: number;
};

type Coordinate = {
  x: number;
  y: number;
};

type FontStyle = Readonly<{
  readonly fontSize: number;
  readonly fontWeight: string;
  readonly fontFamily: string;
  readonly fontColor: string;
}>;

export type {
  ChartComponent,
  ChartComponentStrategy,
  ChartStrategy,
  Size,
  Coordinate,
  FontStyle,
};
