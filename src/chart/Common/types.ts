interface ChartComponentStrategy {
  update: (args: any) => void;
  renderer: (args: any) => void;
  reload: (args: any) => void;
  load: (args: any) => void;
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

export type {
  ChartComponent,
  ChartComponentStrategy,
  ChartStrategy,
  Size,
  Coordinate,
};
