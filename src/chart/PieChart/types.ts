import type { Coordinate, FontStyle, Size } from '../Common/types';

type PieChartData = {
  total: number;
  name: Array<string>;
  value: Array<number>;
  color: Array<string>;
};

type PieChartStyles = Omit<FontStyle, 'fontSize'> & {
  backgroundColor: string;
  title: Omit<FontStyle, 'fontSize'>;
  legend: Omit<FontStyle, 'fontSize'> & {
    direction: 'v' | 'h';
  };
  tooltip: Omit<FontStyle, 'fontSize'> & {
    backgroundColor: string;
    borderRadius: number;
    borderColor: string;
  };
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
  readonly remainder: boolean;
}>;

export type { PieChartData, PieChartRenderData, PieChartStyles };
