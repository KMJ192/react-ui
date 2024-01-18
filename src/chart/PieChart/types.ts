import { Coordinate, Size } from '../Common/types';

type PieChartData = {
  total: number;
  name: Array<string>;
  value: Array<number>;
  color: Array<string>;
};

type PieChartRenderData = Readonly<{
  readonly label: string;
  readonly value: string;
  readonly labelSize: Size;
  readonly valueLabel: string;
  readonly valueLabelSize: Size;
  readonly startDegree: number;
  readonly endDegree: number;
  readonly midDegree: number;
  readonly midDegreeCoordinate: Coordinate;
  readonly color: string;
  readonly disabled: boolean;
}>;

export type { PieChartData, PieChartRenderData };
