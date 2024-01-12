import React, { useEffect, useMemo, useRef } from 'react';

import type { COMBINE_ELEMENT_PROPS } from '@src/types/types';

import Chart from './Chart';
import { PieChartData } from './types';

type BaseProps = {
  data: PieChartData;
  children: React.ReactNode;
  className: string;
};

const LAYER = 'div';

type Props<T extends React.ElementType> = COMBINE_ELEMENT_PROPS<T, BaseProps>;

function PieChart<T extends React.ElementType = typeof LAYER>(
  { data, ...props }: Props<T>,
  ref: React.Ref<React.ElementRef<typeof LAYER>>,
) {
  const layerRef = useRef(null);

  const donutChart = useMemo(() => new Chart(), []);

  useEffect(() => {
    const layer =
      (ref as React.RefObject<React.ElementRef<typeof LAYER>>)?.current ??
      layerRef.current;

    if (!layer) return () => {};

    const unmount = donutChart.load({
      layer,
      data,
    });

    return () => {
      unmount();
    };
  }, [donutChart, data]);

  return (
    <div {...props} ref={ref ?? layerRef}>
      <canvas></canvas>
      <canvas></canvas>
      <canvas></canvas>
      <canvas></canvas>
    </div>
  );
}

export type PieChartProps = Props<typeof LAYER>;
export default React.forwardRef(PieChart) as typeof PieChart;
