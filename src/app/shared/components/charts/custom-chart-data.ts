import { ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';

export interface CustomChartData {

  xAxisLabel: string;
  yAxisLabel: string;
  chartDatasets: ChartDataSets[];
  chartLabels: Label[];
}
