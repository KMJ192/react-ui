import Legend from './Legend';
import Tooltip from './Tooltip';

class Common {
  public legend: Legend;

  public tooltip: Tooltip;

  constructor() {
    this.legend = new Legend();

    this.tooltip = new Tooltip();
  }
}

export default Common;
