import { debounce } from '@src/utils/utils';
import Vector from '../Common/Vector';
import { getTextSize } from '../Common/utils';
import Legend, { type LegendDataInfo } from '../Common/Legend';
import Label from './Label';
import Wedge from './Wedge';
import type {
  PieChartData,
  PieChartLabelDataInfo,
  PieChartWedgeDataInfo,
} from './types';
import { pieChartDefaultValues } from './defaultVales';
import Tooltip, { type TooltipDataInfo } from './Tooltip';

type PieChartParams = {
  layer: HTMLElement;
  data: PieChartData;
  divideColor?: string;
};

class PieChart {
  // canvas layer
  public layer: HTMLElement | null;

  // wedge
  private wedge: Wedge;

  // 레이블
  private label: Label;

  // 범례
  private legend: Legend;

  // 튤팁
  private tooltip: Tooltip;

  // 입력 데이터
  private data: PieChartData;

  // chart 너비
  private width: number;

  // chart 높이
  private height: number;

  // chart 위치
  private position: Vector;

  // chart 반지름
  private radius: number;

  // 로드 진행 여부
  private isLoad: boolean;

  constructor(params?: Partial<PieChartParams>) {
    this.layer = params?.layer ?? null;

    this.wedge = new Wedge();

    this.label = new Label();

    this.legend = new Legend();

    this.tooltip = new Tooltip();

    this.data = {
      total: 0,
      name: [],
      value: [],
      color: [],
    };

    this.width = 0;

    this.height = 0;

    this.position = new Vector(0, 0);

    this.radius = 0;

    this.isLoad = false;
  }

  private resizeEvent = () => {
    const { layer } = this;
    if (!layer) return () => {};

    const update: () => void = debounce(() => {
      if (this.isLoad) return;
      this.reload();
      this.reactiveStyleSetter();
      this.update();
      this.render();
    }, 50);

    const observer = new ResizeObserver(update);
    observer.observe(layer);
    return () => {
      observer.disconnect();
    };
  };

  private hoverEvent = () => {
    const { layer } = this;
    if (!layer) return () => {};

    const mouseMove = (e: MouseEvent) => {
      if (this.wedge.isRender) return;
      if (this.isLoad) return;

      const { clientX, clientY } = e;
      const bbox = layer.getBoundingClientRect();

      const x = clientX - bbox.left;
      const y = clientY - bbox.top;

      let hoverIdx = -1;

      const { isInside: isInsideWedge, index: hoveredWedgeIdx } =
        this.wedge.isInsideWedge(x, y);
      const { isInside: isInsideLegend, index: hoveredLegend } =
        this.legend.isInsideLegend(x, y);

      if (isInsideWedge && this.wedge.dataInfo[hoveredWedgeIdx].disabled) {
        layer.style.cursor = 'not-allowed';
      } else {
        layer.style.cursor = 'default';
      }

      if (isInsideWedge) {
        hoverIdx = hoveredWedgeIdx;
        const { label, labelWidth, labelHeight, color } =
          this.tooltip.dataInfo[hoverIdx];

        this.tooltip.label = label;
        this.tooltip.width = labelWidth + 30;
        this.tooltip.height = labelHeight * 2.5 + 5;
        this.tooltip.position.x = x + 10;
        this.tooltip.position.y = y + 10;
        this.tooltip.markColor = color;

        this.tooltip.renderer();
      } else {
        this.tooltip.clear();
      }
      if (isInsideLegend) {
        hoverIdx = hoveredLegend;
      }

      this.wedge.hoverIdx = hoverIdx;
      this.wedge.renderer();
    };

    layer.addEventListener('mousemove', mouseMove);

    return () => {
      layer.removeEventListener('mousemove', mouseMove);
    };
  };

  private update = () => {
    const { layer } = this;
    const { ctx } = this.wedge.canvas;
    if (!layer || !ctx) return;

    const angle = (degree: number) => {
      return ((degree - 90) / 180) * Math.PI;
    };

    const { total, value, name, color } = this.data;

    const wedgeDataInfo: Array<PieChartWedgeDataInfo> = [];
    const labelDataInfo: Array<PieChartLabelDataInfo> = [];
    const legendDataInfo: Array<LegendDataInfo> = [];
    const tooltipDataInfo: Array<TooltipDataInfo> = [];

    let degreeUpdate = 0;
    let sub = 0;

    value.forEach((v, idx) => {
      const rate = v / total;
      const degree = 360 * rate;
      const isFirst = idx === 0;
      const label = name[idx] ?? '';
      const c = color[idx] ?? pieChartDefaultValues.wedgeColor;

      const { width: labelWidth, height: labelHeight } = getTextSize(
        ctx,
        label,
      );
      const valueLabel = `${label}: ${v}`;
      const { width: valueLabelWidth, height: valueLabelHeight } = getTextSize(
        ctx,
        valueLabel,
      );

      const startDegree = isFirst ? 0 : degreeUpdate;
      const endDegree = isFirst ? degree : degreeUpdate + degree;
      const midDegree = startDegree + (endDegree - startDegree) / 2;

      const midDegreeX =
        Math.cos(angle(midDegree)) * this.radius + this.position.x;
      const midDegreeY =
        Math.sin(angle(midDegree)) * this.radius + this.position.y;

      sub += v;
      degreeUpdate += degree;

      wedgeDataInfo.push({
        startDegree,
        endDegree,
        color: c,
        disabled: false,
      });
      labelDataInfo.push({
        label,
        midDegree,
        midDegreeX,
        midDegreeY,
        isHalf: this.position.x <= midDegreeX,
        labelWidth,
        labelHeight,
      });
      legendDataInfo.push({
        label: valueLabel,
        color: c,
        labelWidth: valueLabelWidth,
        labelHeight: valueLabelHeight,
      });
      tooltipDataInfo.push({
        label: valueLabel,
        color: c,
        labelWidth: valueLabelWidth,
        labelHeight: valueLabelHeight,
      });
    });

    if (sub < total) {
      const rate = (total - sub) / total;
      const degree = 360 * rate;
      const startDegree = degreeUpdate;
      const endDegree = degreeUpdate + degree;

      const c =
        color.length - value.length >= 1
          ? color[value.length]
          : pieChartDefaultValues.disabledColor;
      wedgeDataInfo.push({
        startDegree,
        endDegree,
        color: c,
        disabled: true,
      });
    }

    this.wedge.update({
      x: this.position.x,
      y: this.position.y,
      dataInfo: wedgeDataInfo,
      width: this.width,
      height: this.height,
      radius: this.radius,
    });
    this.label.update({
      dataInfo: labelDataInfo,
      radius: this.radius,
    });
    this.legend.update({ dataInfo: legendDataInfo });
    this.tooltip.update({
      labelColor: 'black',
      backgroundColor: '#fff',
      dataInfo: tooltipDataInfo,
    });
  };

  private render = () => {
    this.wedge.renderer();
    this.label.renderer();
    this.legend.renderer();
  };

  private reload = () => {
    this.wedge.reload();
    this.label.reload();
    this.legend.reload();
    this.tooltip.reload();
  };

  private reactiveStyleSetter = () => {
    const { layer } = this;
    if (!layer) return;

    this.width = layer.clientWidth;
    this.height = layer.clientHeight;
    this.position.x = this.width / 2;
    this.position.y = this.height / 2;
    this.radius = this.width < this.height ? this.width / 4 : this.height / 4;
    let fontSize =
      this.width < this.height ? this.height * 0.01 : this.width * 0.01;
    fontSize = fontSize <= 12 ? 12 : fontSize;

    if (this.wedge.canvas.ctx)
      this.wedge.canvas.ctx.font = `${fontSize}px Arial`;
    if (this.label.canvas.ctx)
      this.label.canvas.ctx.font = `${fontSize}px Arial`;
    if (this.legend.canvas.ctx)
      this.legend.canvas.ctx.font = `${fontSize}px Arial`;
    if (this.tooltip.canvas.ctx)
      this.tooltip.canvas.ctx.font = `${fontSize}px Arial`;

    this.legend.markSize = fontSize === 12 ? 8 : fontSize * 0.7;
    this.legend.markRound = fontSize === 12 ? 1 : 2;
    this.tooltip.markSize = this.legend.markSize;
  };

  private defaultStyleSetter = () => {
    this.legend.defaultStyleSetter({
      direction: 'v',
      position: { x: 10, y: 10 },
      columGap: 10,
      rowGap: 8,
      markTextGap: 5,
    });
    this.tooltip.defaultStyleSetter({
      markTextGap: 4,
    });
  };

  public load = ({ layer, data, divideColor }: PieChartParams) => {
    this.isLoad = true;

    this.layer = layer;
    this.layer.style.position = 'relative';
    if (!this.layer.style.width) this.layer.style.width = '100%';
    if (!this.layer.style.height) this.layer.style.height = '100%';

    this.data = data;

    const labelCanvas = this.layer.children[0] as HTMLCanvasElement;
    const wedgeCanvas = this.layer.children[1] as HTMLCanvasElement;
    const legendCanvas = this.layer.children[2] as HTMLCanvasElement;
    const tooltipCanvas = this.layer.children[3] as HTMLCanvasElement;

    this.tooltip.load({ canvas: tooltipCanvas });
    this.wedge.load({
      canvas: wedgeCanvas,
      divideColor: divideColor ?? pieChartDefaultValues.divideColor,
    });
    this.label.load({
      canvas: labelCanvas,
    });
    this.legend.load({ canvas: legendCanvas });

    this.defaultStyleSetter();
    this.reactiveStyleSetter();
    this.update();
    this.render();

    const unmountHoverEvent = this.hoverEvent();
    const unmountResizeEvent = this.resizeEvent();

    this.isLoad = false;

    return () => {
      unmountHoverEvent();
      unmountResizeEvent();
    };
  };
}

export default PieChart;
