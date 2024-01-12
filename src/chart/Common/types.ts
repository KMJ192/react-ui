interface ChartStrategy {
  update: (args: any) => void;
  renderer: (args: any) => void;
  reload: (args: any) => void;
  load: (args: any) => void;
}

export type { ChartStrategy };
