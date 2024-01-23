import Vector from '../Common/Vector';
import Layer from '../Common/Layer';
import { getTextSize } from '../Common/utils';

import Label from './Label';
import Wedge from './Wedge';

import { pieChartDefaultValues } from './defaultVales';

import type { PieChartData, PieChartRenderData, PieChartStyles } from './types';
import type { ChartStrategy } from '../Common/types';

export type PieChartParams = {
  layer: HTMLElement;
  data: PieChartData;
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

  private styles: PieChartStyles;

  public hoverObserver: (x: number, y: number, HoverIndex?: number) => void;

  public resizeObserver: () => void;

  public dataGeneratorObserver: (
    data: PieChartRenderData | null,
    index: number,
  ) => void;

  public styleUpdateObserver: (
    width: number,
    height: number,
    radius: number,
  ) => void;

  public renderObserver: () => void;

  constructor() {
    this.layer = new Layer();

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

    this.styles = pieChartDefaultValues;

    this.hoverObserver = () => {};

    this.resizeObserver = () => {};

    this.dataGeneratorObserver = () => {};

    this.styleUpdateObserver = () => {};

    this.renderObserver = () => {};
  }

  get renderDataGetter() {
    return this.renderData;
  }

  set hover(index: number) {
    this.wedge.hoverIdx = index;
    this.wedge.renderer();
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
    const { isInside, index } = this.wedge.isInsideWedge(x, y);

    if (isInside && renderData[index].disabled) {
      layer.style.cursor = 'not-allowed';
    } else {
      layer.style.cursor = 'default';
    }
    if (isInside) {
      hoverIdx = index;
    }

    this.hover = hoverIdx;

    this.hoverObserver(x, y, hoverIdx !== -1 ? hoverIdx : undefined);
  };

  private styleUpdate = () => {
    const { width, height } = this.layer;

    this.position.x = width / 2;
    this.position.y = height / 2;
    this.radius = width < height ? width / 4 : height / 4;
    let fontSize = width < height ? height * 0.01 : width * 0.01;
    fontSize = fontSize <= 12 ? 12 : fontSize;

    this.wedge.styleUpdate({
      position: this.position,
      radius: this.radius,
    });
    this.label.styleUpdate({
      position: this.position,
      radius: this.radius,
      style: {
        fontSize,
        fontFamily: this.styles.fontFamily,
        fontWeight: this.styles.fontWeight,
        fontColor: this.styles.fontColor,
      },
    });

    this.styleUpdateObserver(width, height, this.radius);
  };

  private renderDataUpdate = () => {
    const { ctx } = this.wedge.canvas;
    if (!ctx) return;

    const { total, value, name, color } = this.data;

    let degreeUpdate = 0;
    let sub = 0;
    this.renderData = [];
    this.dataGeneratorObserver(null, -1);

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
        remainder: false,
      };

      this.renderData.push(data);

      this.dataGeneratorObserver(data, idx);

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

      const data: PieChartRenderData = {
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
        remainder: true,
      };

      this.renderData.push(data);

      this.dataGeneratorObserver(data, value.length);
    }

    this.wedge.update(this.renderData);
    this.label.update(this.renderData);
  };

  private render = () => {
    this.wedge.renderer();
    this.label.renderer();
    this.renderObserver();
  };

  private reload = () => {
    this.wedge.reload();
    this.label.reload();
    this.resizeObserver();

    this.styleUpdate();
    this.renderDataUpdate();
    this.render();
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

    this.wedge.load({
      canvas: wedgeCanvas,
    });
    this.label.load({
      canvas: labelCanvas,
    });

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
