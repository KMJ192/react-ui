import Vector from '../Common/Vector';
import Layer from '../Common/Layer';
import Title from '../Common/Title';
import Legend from '../Common/Legend';
import Tooltip from '../Common/Tooltip';
import { getTextSize } from '../Common/utils';

import Label from './Label';
import Wedge from './Wedge';

import { pieChartDefaultValues } from './defaultVales';

import type { PieChartData, PieChartRenderData } from './types';
import type { ChartStrategy, FontStyle } from '../Common/types';

export type PieChartParams = {
  layer: HTMLElement;
  data: PieChartData;
  title: string;
  style?: {
    backgroundColor: string;
    title?: FontStyle;
    legend?: FontStyle;
    tooltip?: FontStyle & {
      backgroundColor?: string;
      borderRadius?: number;
      borderColor?: string;
    };
  };
};

const angle = (degree: number) => {
  return ((degree - 90) / 180) * Math.PI;
};
class PieChart implements ChartStrategy {
  // main layer
  private layer: Layer;

  // 데이터뷰
  private wedge: Wedge;

  // 레이블
  private label: Label;

  // 타이틀
  private title: Title;

  // 범례
  private legend: Legend;

  // 튤팁
  private tooltip: Tooltip;

  // 입력 데이터
  private data: PieChartData;

  // 랜더링 데이터 정보
  private renderData: Array<PieChartRenderData>;

  // chart 위치
  private position: Vector;

  // chart 반지름
  private radius: number;

  // 로드 진행 여부
  private isLoad: boolean;

  constructor() {
    this.layer = new Layer();

    this.legend = new Legend();

    this.tooltip = new Tooltip();

    this.title = new Title();

    this.wedge = new Wedge();

    this.label = new Label();

    this.data = {
      total: 0,
      name: [],
      value: [],
      color: [],
    };

    this.renderData = [];

    this.position = new Vector(0, 0);

    this.radius = 0;

    this.isLoad = false;
  }

  private resizeEvent = () => {
    if (this.isLoad) return;
    this.reload();
  };

  private hoverEvent = (x: number, y: number) => {
    const { layer } = this.layer;
    if (!layer || this.isLoad || this.wedge.getIsRender) return;
    const { renderData } = this;

    let hoverIdx = -1;

    const { isInside: isInsideWedge, index: hoveredWedgeIdx } =
      this.wedge.isInsideWedge(x, y);
    const { isInside: isInsideLegend, index: hoveredLegendIndex } =
      this.legend.isInsideLegend(x, y);

    if (isInsideWedge && renderData[hoveredWedgeIdx].disabled) {
      layer.style.cursor = 'not-allowed';
    } else {
      layer.style.cursor = 'default';
    }
    if (isInsideWedge) {
      hoverIdx = hoveredWedgeIdx;
    } else if (isInsideLegend) {
      hoverIdx = hoveredLegendIndex;
    }

    if (hoverIdx !== -1 && !renderData[hoverIdx].disabled) {
      const { color, label, value } = renderData[hoverIdx];
      this.tooltip.renderer({
        coordinate: { x: x + 10, y: 10 + y },
        title: '',
        markColor: [color],
        names: [label],
        value: [value],
      });
    } else {
      this.tooltip.clear();
    }

    this.wedge.hoverIdx = hoverIdx;
    this.wedge.renderer();
  };

  private styleUpdate = () => {
    const { width, height } = this.layer;

    this.position.x = width / 2;
    this.position.y = height / 2;
    this.radius = width < height ? width / 4 : height / 4;
    let fontSize = width < height ? height * 0.01 : width * 0.01;
    fontSize = fontSize <= 12 ? 12 : fontSize;
    const font = `${fontSize}px Arial`;

    this.title.styleUpdate({
      font: `600 ${fontSize * 4}px Arial`,
      coordinate: {
        x: this.position.x,
        y: 17,
      },
    });
    this.wedge.styleUpdate({
      position: this.position,
      radius: this.radius,
      font,
    });
    this.label.styleUpdate({
      position: this.position,
      radius: this.radius,
      font,
    });
    this.legend.styleUpdate({
      direction: 'v',
      position: { x: 10, y: 10 },
      columGap: 10,
      rowGap: 8,
      markTextGap: 5,
      markSize: fontSize === 12 ? 8 : fontSize * 0.7,
      markRound: fontSize === 12 ? 1 : 2,
      font,
    });
    this.tooltip.styleUpdate({
      strokeColor: '#000',
      backgroundColor: '#fff',
      markSize: fontSize === 12 ? 8 : fontSize * 0.7,
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

  private renderDataUpdate = () => {
    const { ctx } = this.wedge.canvas;
    if (!ctx) return;

    const { total, value, name, color } = this.data;

    let degreeUpdate = 0;
    let sub = 0;
    this.renderData = [];
    this.legend.renderData = [];

    value.forEach((v, idx) => {
      const rate = v / total;
      const degree = 360 * rate;
      const label = name[idx] ?? '';
      const valueLabel = `${label}: ${v}`;
      const c = color[idx] ?? pieChartDefaultValues.wedgeColor;

      const startDegree = degreeUpdate;
      const endDegree = degreeUpdate + degree;
      const midDegree = startDegree + (endDegree - startDegree) / 2;

      const midDegreeX =
        Math.cos(angle(midDegree)) * this.radius + this.position.x;
      const midDegreeY =
        Math.sin(angle(midDegree)) * this.radius + this.position.y;

      const data: PieChartRenderData = {
        label,
        value: String(v),
        labelSize: getTextSize(ctx, label),
        valueLabel,
        valueLabelSize: getTextSize(ctx, valueLabel),
        startDegree,
        endDegree,
        midDegree,
        midDegreeCoordinate: {
          x: midDegreeX,
          y: midDegreeY,
        },
        color: c,
        disabled: false,
      };

      this.renderData.push(data);

      const { width: lw, height: lh } = getTextSize(ctx, label);
      this.legend.renderData.push({
        label,
        color: c,
        labelWidth: lw,
        labelHeight: lh,
      });

      sub += v;
      degreeUpdate += degree;
    });

    if (sub < total) {
      const rate = (total - sub) / total;
      const degree = 360 * rate;
      const label = '';
      const valueLabel = '';
      const startDegree = degreeUpdate;
      const endDegree = degreeUpdate + degree;
      const midDegree = startDegree + (endDegree - startDegree) / 2;
      const c =
        color.length - value.length >= 1
          ? color[value.length]
          : pieChartDefaultValues.disabledColor;

      const data = {
        label,
        value: '',
        labelSize: getTextSize(ctx, label),
        valueLabel,
        valueLabelSize: getTextSize(ctx, valueLabel),
        startDegree,
        endDegree,
        midDegree,
        midDegreeCoordinate: {
          x: Math.cos(angle(midDegree)) * this.radius + this.position.x,
          y: Math.sin(angle(midDegree)) * this.radius + this.position.y,
        },
        color: c,
        disabled: true,
      };

      this.renderData.push(data);
    }

    this.wedge.update(this.renderData);
    this.label.update(this.renderData);
  };

  private render = () => {
    this.title.renderer();
    this.wedge.renderer();
    this.label.renderer();
    this.legend.renderer();
  };

  private reload = () => {
    this.title.reload();
    this.wedge.reload();
    this.label.reload();
    this.legend.reload();
    this.tooltip.reload();

    this.styleUpdate();
    this.renderDataUpdate();
    this.render();
  };

  public load = ({ layer, data, title }: PieChartParams) => {
    this.isLoad = true;

    const unmountLayer = this.layer.load({
      layer,
      hoverEvents: [this.hoverEvent],
      resizeEvents: [this.resizeEvent],
    });
    if (!this.layer.layer) return () => {};

    this.data = data;

    const labelCanvas = this.layer.layer.children[0] as HTMLCanvasElement;
    const wedgeCanvas = this.layer.layer.children[1] as HTMLCanvasElement;
    const titleCanvas = this.layer.layer.children[2] as HTMLCanvasElement;
    const legendCanvas = this.layer.layer.children[3] as HTMLCanvasElement;
    const tooltipCanvas = this.layer.layer.children[4] as HTMLCanvasElement;

    this.wedge.load({
      canvas: wedgeCanvas,
    });
    this.label.load({
      canvas: labelCanvas,
      fontStyle: pieChartDefaultValues.font,
    });
    this.title.load({ canvas: titleCanvas, title });
    this.legend.load({ canvas: legendCanvas });
    this.tooltip.load({ canvas: tooltipCanvas });

    this.styleUpdate();
    this.renderDataUpdate();
    this.render();

    this.isLoad = false;

    return () => {
      unmountLayer();
    };
  };
}

export default PieChart;
