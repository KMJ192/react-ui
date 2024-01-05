import React, { useEffect, useMemo, useRef } from 'react';

import type { COMBINE_ELEMENT_PROPS } from '@src/types/types';
import Canvas from '../Common/Canvas';

type BaseProps = {
  // ...
};

const DEFAULT_ELEMENT = 'canvas';

type Props<T extends React.ElementType> = COMBINE_ELEMENT_PROPS<T, BaseProps>;

function DonutChart<T extends React.ElementType = typeof DEFAULT_ELEMENT>(
  { className, ...props }: Props<T>,
  ref: React.Ref<React.ElementRef<typeof DEFAULT_ELEMENT>>,
) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const canvas = useMemo(() => new Canvas(), []);

  useEffect(() => {
    const cr = ref ?? canvasRef;
    if (!(cr as any).current) return () => {};
    const c: HTMLCanvasElement = (cr as any).current;
    const result = canvas.init({
      canvas: c,
    });
    if (!canvas.ctx) return () => {};

    return () => {
      result();
    };
  }, []);

  return (
    <DEFAULT_ELEMENT
      {...props}
      ref={ref ?? canvasRef}
      className={className}
      style={{
        border: '1px solid black',
      }}
    ></DEFAULT_ELEMENT>
  );
}

export type DonutChartProps = Props<typeof DEFAULT_ELEMENT>;
export default React.forwardRef(DonutChart) as typeof DonutChart;
