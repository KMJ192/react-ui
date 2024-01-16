import Layer from '../Common/Layer';
import Label from './Label';
import Wedge from './Wedge';
import Vector from '../Common/Vector';
import { getTextSize } from '../Common/utils';
import { pieChartDefaultValues } from './defaultVales';

// import Legend, { type LegendDataInfo } from '../Common/Legend';
import Tooltip from '../Common/Tooltip';

import type { PieChartData, PieChartRenderData } from './types';
import type { ChartComponent, ChartStrategy } from '../Common/types';

type PieChartParams = {
  layer: HTMLElement;
  data: PieChartData;
};

class PieChart implements ChartStrategy {
  // main layer
  public layer: Layer;

  public components: Array<ChartComponent>;

  // wedge
  private wedge: Wedge;

  // 레이블
  private label: Label;

  // // 범례
  // private legend: Legend;

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

    this.components = [];

    this.wedge = new Wedge();

    this.label = new Label();

    // this.legend = new Legend();

    this.tooltip = new Tooltip();

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

  public thisState = () => {
    return { renderData: this.renderData };
  };

  private resizeEvent = () => {
    if (this.isLoad) return;
    this.reload();
  };

  private hoverEvent = (x: number, y: number) => {
    const { layer } = this.layer;
    if (!layer) return;
    if (this.wedge.isRender) return;
    if (this.isLoad) return;
    const { renderData } = this;

    let hoverIdx = -1;

    const { isInside: isInsideWedge, index: hoveredWedgeIdx } =
      this.wedge.isInsideWedge(x, y);
    // const { isInside: isInsideLegend, index: hoveredLegend } =
    //   this.legend.isInsideLegend(x, y);

    if (isInsideWedge && renderData[hoveredWedgeIdx].disabled) {
      layer.style.cursor = 'not-allowed';
    } else {
      layer.style.cursor = 'default';
    }

    if (isInsideWedge) {
      hoverIdx = hoveredWedgeIdx;
      const { color, label, value } = renderData[hoverIdx];
      this.tooltip.render({
        coordinate: { x, y },
        title: '',
        markColor: [color],
        names: [label],
        value: [value],
      });
    } else {
      this.tooltip.clear();
    }
    // if (isInsideLegend) {
    //   hoverIdx = hoveredLegend;
    // }

    this.wedge.hoverIdx = hoverIdx;
    this.wedge.renderer();
  };

  private update = () => {
    const { layer } = this.layer;
    const { ctx } = this.wedge.canvas;
    if (!layer || !ctx) return;

    const angle = (degree: number) => {
      return ((degree - 90) / 180) * Math.PI;
    };

    const { total, value, name, color } = this.data;

    // const legendDataInfo: Array<LegendDataInfo> = [];

    let degreeUpdate = 0;
    let sub = 0;
    this.renderData = [];

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

      this.renderData.push({
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
      });

      // legendDataInfo.push({
      //   label,
      //   color: c,
      //   labelWidth,
      //   labelHeight,
      // });

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

      this.renderData.push({
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
      });
    }

    // this.legend.update({ dataInfo: legendDataInfo });

    this.wedge.update(this.renderData);
    this.label.update(this.renderData);
  };

  private render = () => {
    this.wedge.renderer();
    this.label.renderer();
    // this.legend.renderer();
  };

  private reload = () => {
    this.wedge.reload();
    this.label.reload();
    // this.legend.reload();
    this.tooltip.reload();

    // this.defaultStyleSetter();
    this.reactiveStyleSetter();
    this.update();
    this.render();
  };

  private reactiveStyleSetter = () => {
    const { layer, width, height } = this.layer;
    if (!layer) return;

    this.position.x = width / 2;
    this.position.y = height / 2;
    this.radius = width < height ? width / 4 : height / 4;
    let fontSize = width < height ? height * 0.01 : width * 0.01;
    fontSize = fontSize <= 12 ? 12 : fontSize;
    const font = `${fontSize}px Arial`;

    // if (this.label.canvas.ctx)
    //   this.label.canvas.ctx.font = `${fontSize}px Arial`;

    this.wedge.reactiveStyleSetter({
      position: this.position,
      radius: this.radius,
      font,
    });
    this.label.reactiveStyleSetter({
      position: this.position,
      radius: this.radius,
      font,
    });
    this.tooltip.reactiveStyleSetter({
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

    // if (this.legend.canvas.ctx)
    //   this.legend.canvas.ctx.font = `${fontSize}px Arial`;

    // this.legend.markSize = fontSize === 12 ? 8 : fontSize * 0.7;
    // this.legend.markRound = fontSize === 12 ? 1 : 2;
  };

  private styleSetter = () => {
    // this.legend.defaultStyleSetter({
    //   direction: 'v',
    //   position: { x: 10, y: 10 },
    //   columGap: 10,
    //   rowGap: 8,
    //   markTextGap: 5,
    // });
    this.tooltip.styleSetter({
      strokeColor: '#000',
      backgroundColor: '#fff',
    });
  };

  public load = ({ layer, data }: PieChartParams) => {
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
    // const legendCanvas = this.layer.layer.children[2] as HTMLCanvasElement;
    const tooltipCanvas = this.layer.layer.children[3] as HTMLCanvasElement;

    this.wedge.load({
      canvas: wedgeCanvas,
    });
    this.label.load({
      canvas: labelCanvas,
    });
    // this.legend.load({ canvas: legendCanvas });
    this.tooltip.load({ canvas: tooltipCanvas });

    // this.defaultStyleSetter();
    this.styleSetter();
    this.reactiveStyleSetter();
    this.update();
    this.render();

    this.isLoad = false;

    return () => {
      unmountLayer();
    };
  };
}

export default PieChart;
