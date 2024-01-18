interface ChartComponentStrategy {
  renderer: (args: any) => void;
  reload: (args: any) => void;
  load: (args: any) => void;
  styleUpdate: (args: any) => void;
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

type FontStyle = Partial<{
  fontSize: string;
  fontWeight: string;
  fontFamily: string;
  fontColor: string;
}>;

export type {
  ChartComponent,
  ChartComponentStrategy,
  ChartStrategy,
  Size,
  Coordinate,
  FontStyle,
};
