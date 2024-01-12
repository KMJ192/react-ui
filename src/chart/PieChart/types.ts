type PieChartData = {
  total: number;
  name: Array<string>;
  value: Array<number>;
  color: Array<string>;
};

type PieChartLabelDataInfo = {
  label: string;
  midDegree: number;
  midDegreeX: number;
  midDegreeY: number;
  isHalf: boolean;
  labelWidth: number;
  labelHeight: number;
};

type PieChartWedgeDataInfo = {
  startDegree: number;
  endDegree: number;
  color: string;
  disabled: boolean;
};

export type { PieChartData, PieChartWedgeDataInfo, PieChartLabelDataInfo };
