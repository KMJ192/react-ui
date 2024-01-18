import React, { useEffect, useMemo, useRef } from 'react';

import type { COMBINE_ELEMENT_PROPS } from '@src/types/types';

import Chart, { PieChartParams } from './Chart';
import type { PieChartData } from './types';

type BaseProps = {
  data?: PieChartData;
  title?: string;
};

const LAYER = 'div';

type Props<T extends React.ElementType> = COMBINE_ELEMENT_PROPS<T, BaseProps>;

function PieChart<T extends React.ElementType = typeof LAYER>(
  {
    data = {
      total: 0,
      name: [],
      value: [],
      color: [],
    },
    title = '',
    ...props
  }: Props<T>,
  ref: React.Ref<React.ElementRef<typeof LAYER>>,
) {
  const pieChart = useMemo(() => new Chart(), []);
  const layerRef = useRef(null);

  useEffect(() => {
    const layer =
      (ref as React.RefObject<React.ElementRef<typeof LAYER>>)?.current ??
      layerRef.current;
    if (!layer) return () => {};

    const unmount = pieChart.load({
      layer,
      data,
      title,
    });

    return () => {
      unmount();
    };
  }, [pieChart, data]);

  return (
    <div {...props} ref={ref ?? layerRef}>
      <canvas></canvas>
      <canvas></canvas>
      <canvas></canvas>
      <canvas></canvas>
      <canvas></canvas>
    </div>
  );
}

export type PieChartProps = Props<typeof LAYER>;
export default React.forwardRef(PieChart) as typeof PieChart;
