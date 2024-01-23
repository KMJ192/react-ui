import React, { useEffect, useMemo, useRef } from 'react';

import type { COMBINE_ELEMENT_PROPS, RecursivePartial } from '@src/types/types';

import Chart from './Chart';
import Title from '../Common/Title';
import Legend from '../Common/Legend';
import Tooltip from '../Common/Tooltip';
import type { PieChartData, PieChartStyles } from './types';

type BaseProps = {
  data?: PieChartData;
  title?: string;
  styles?: RecursivePartial<PieChartStyles>;
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
    styles,
    ...props
  }: Props<T>,
  ref: React.Ref<React.ElementRef<typeof LAYER>>,
) {
  const pieChart = useMemo(() => new Chart(), []);
  const chartTitle = useMemo(() => new Title(), []);
  const chartLegend = useMemo(() => new Legend(), []);
  const chartTooltip = useMemo(() => new Tooltip(), []);

  const layerRef = useRef(null);
  const titleRef = useRef<HTMLCanvasElement>(null);
  const legendRef = useRef<HTMLCanvasElement>(null);
  const tooltipRef = useRef<HTMLCanvasElement>(null);

  // Chart 구성요소 업데이트 옵저버 등록
  useEffect(() => {
    pieChart.hoverObserver = (x, y, hoveredIndex) => {
      const { isInside: isHoverLegend, index: hoveredLegendIndex } =
        chartLegend.isInsideLegend(x, y);
      const isHoverWedge = typeof hoveredIndex === 'number';

      let index = -1;
      if (isHoverWedge) {
        index = hoveredIndex;
      } else if (isHoverLegend) {
        index = hoveredLegendIndex;
      }

      if (index > -1) {
        pieChart.hover = index;

        const { color, label, value, disabled } =
          pieChart.renderDataGetter[index];
        if (disabled) {
          chartTooltip.clear();
          return;
        }
        chartTooltip.renderer({
          coordinate: { x: x + 10, y: 10 + y },
          title: '',
          markColor: [color],
          names: [label],
          value: [value],
        });
      } else {
        chartTooltip.clear();
      }
    };

    pieChart.resizeObserver = () => {
      chartTitle.reload();
      chartLegend.reload();
      chartTooltip.reload();
    };

    pieChart.styleUpdateObserver = (width, height) => {
      let fontSize = width < height ? height * 0.01 : width * 0.01;
      fontSize = fontSize <= 12 ? 12 : fontSize;
      const markSize = fontSize === 12 ? 8 : fontSize * 0.7;
      const font = `${fontSize}px Arial`;

      const x = width / 2;

      chartTitle.styleUpdate({
        font: `600 ${fontSize * 4}px Arial`,
        coordinate: {
          x,
          y: 17,
        },
      });
      chartLegend.styleUpdate({
        direction: 'v',
        position: { x: 10, y: 10 },
        columGap: 10,
        rowGap: 8,
        markTextGap: 5,
        markSize,
        markRound: fontSize === 12 ? 1 : 2,
        font,
      });
      chartTooltip.styleUpdate({
        strokeColor: '#000',
        backgroundColor: '#fff',
        markSize,
        font,
        rowGap: 4,
        columnGap: 12,
        markLabelGap: 4,
        titleContentsGap: 0,
        padding: {
          top: 6,
          bottom: 6,
          left: 6,
          right: 6,
        },
      });
    };

    pieChart.dataGeneratorObserver = (data) => {
      if (!data) {
        chartLegend.renderData = [];
        return;
      }

      if (data.remainder) return;

      const { width: labelWidth, height: labelHeight } =
        chartLegend.getTextSize(data.label);
      chartLegend.renderData.push({
        label: data.label,
        color: data.color,
        labelWidth,
        labelHeight,
      });
    };

    pieChart.renderObserver = () => {
      chartTitle.renderer();
      chartLegend.renderer();
    };
  }, [chartLegend, chartTitle, chartTooltip, pieChart]);

  // Chart 구성요소 로드
  useEffect(() => {
    const layer =
      (ref as React.RefObject<React.ElementRef<typeof LAYER>>)?.current ??
      layerRef.current;
    if (!layer) return () => {};

    if (titleRef.current) {
      chartTitle.load({ canvas: titleRef.current, title });
    }
    if (legendRef.current) {
      chartLegend.load({ canvas: legendRef.current });
    }
    if (tooltipRef.current) {
      chartTooltip.load({ canvas: tooltipRef.current });
    }

    const unmount = pieChart.load({
      layer,
      data,
    });

    return () => {
      unmount();
    };
  }, [
    pieChart,
    data,
    title,
    styles,
    ref,
    chartTitle,
    chartLegend,
    chartTooltip,
  ]);

  return (
    <div {...props} ref={ref ?? layerRef}>
      <canvas></canvas>
      <canvas></canvas>
      <canvas ref={titleRef}></canvas>
      <canvas ref={legendRef}></canvas>
      <canvas ref={tooltipRef}></canvas>
    </div>
  );
}

export type PieChartProps = Props<typeof LAYER>;
export default React.forwardRef(PieChart) as typeof PieChart;
