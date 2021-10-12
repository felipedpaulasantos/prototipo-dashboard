import {
  Component,
  Input,
  ViewChild,
  SimpleChanges,
  OnChanges,
  OnInit
} from "@angular/core";
import { ChartOptions, ChartDataSets, ChartType } from "chart.js";
import { ChangeDetectorRef } from "@angular/core";
import { Label, BaseChartDirective, Colors } from "ng2-charts";
import * as pluginDataLabels from "chartjs-plugin-datalabels";

import { CustomChartData } from "../custom-chart-data";
import { GuiaCaixaStyleService } from 'src/app/guia-caixa/services/style-guia-caixa.service';

declare var Chart: any;

const DARK_COLOR = "#48586C";
const LIGHT_COLOR = "#FFFFFF";

@Component({
  selector: "app-bar-chart",
  templateUrl: "./bar-chart.component.html"
})
export class CustomChartComponent implements OnChanges, OnInit {

  constructor(
    private cdRef: ChangeDetectorRef,
    private styleService: GuiaCaixaStyleService
  ) { }

  textColor = DARK_COLOR;

  @ViewChild(BaseChartDirective)
  public chart: BaseChartDirective;

  @Input() public chartData: CustomChartData;

  public maxChartLength = 2;
  public numberOfBars = 5;
  public maxBarWidth = 100;
  public isDataAvailable = false;
  public xAxisLabel = "";
  public yAxisLabel = "";

  public barChartType: ChartType = "bar";
  public barChartPlugins = [pluginDataLabels];
  public barChartLabels: Label[] = [];
  public barChartData: ChartDataSets[] = [];

  public barChartOptions: ChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    tooltips: {
      enabled: true
    },
    scales: {
      xAxes: [
        {
          scaleLabel: {
            display: true,
            labelString: this.xAxisLabel,
            fontStyle: "bold"
          }
        }
      ],
      yAxes: [
        {
          ticks: {
            beginAtZero: true
          },
          scaleLabel: {
            display: true,
            labelString: this.yAxisLabel,
            fontStyle: "bold"
          }
        }
      ]
    },
    plugins: {
      datalabels: {
        color: this.textColor,
        anchor: "end",
        align: "end",
        font: {
          size: 12,
        }
      }
    }
  };

  public barChartColors: Colors[] = [
    { backgroundColor: "rgba(0, 101, 187, 0.6)" },
    { backgroundColor: "rgba(252, 143, 1, 0.6)" },
    { backgroundColor: "rgba(0, 159, 179, 0.6)" },
    { backgroundColor: "rgba(240, 77, 92, 0.6)" },
    { backgroundColor: "rgba(55, 212, 136, 0.6)" }
  ];

  public barChartLegend = true;

  ngOnInit(): void {
    this.styleService.conteudoPrincipalBg$.subscribe(color => {
      if (color === "bg-grafite-dark") {
        this.textColor = LIGHT_COLOR;
        this.setDefaultGlobalColor(LIGHT_COLOR);
      } else {
        this.textColor = DARK_COLOR;
        this.setDefaultGlobalColor(DARK_COLOR);
      }
      this.reloadChart();
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.prepareChartData();
  }

  prepareChartData() {
    if (
      !this.chartData ||
      !this.chartData.chartDatasets ||
      !this.chartData.chartLabels
    ) {
      console.error("Dados insuficientes para gerar o gráfico");
      return;
    }

    this.barChartData = this.chartData.chartDatasets;
    this.barChartLabels = this.chartData.chartLabels;
    this.xAxisLabel = this.chartData.xAxisLabel;
    this.yAxisLabel = this.chartData.yAxisLabel;
    this.barChartOptions.scales = {
      xAxes: [
        {
          scaleLabel: {
            display: true,
            labelString: this.xAxisLabel,
            fontStyle: "bold"
          }
        }
      ],
      yAxes: [
        {
          ticks: {
            beginAtZero: true
          },
          scaleLabel: {
            display: true,
            labelString: this.yAxisLabel,
            fontStyle: "bold"
          }
        }
      ]
    };
    this.isDataAvailable = true;
    this.reloadChart();
  }

  reloadChart() {
    // Aumenta o espaçamento entre a legenda e o gráfico
    Chart.Legend.prototype.afterFit = function () {
      this.height = this.height + 50;
    };

    if (this.chart && this.chart.chart) {
      this.chart.chart.destroy();
      this.chart.chart = null;
      this.chart.labels = this.barChartLabels.slice(0, this.maxChartLength);
      this.chart.datasets = this.setMaxBarThickness(
        this.barChartData.slice(0, this.numberOfBars)
      );
      this.chart.ngOnInit();
    } else {
      this.barChartLabels = this.barChartLabels.slice(0, this.maxChartLength);
      this.barChartData = this.setMaxBarThickness(
        this.barChartData.slice(0, this.numberOfBars)
      );
    }
    this.cdRef.detectChanges();
  }

  updateMaxLength(maxLength: any) {
    if (maxLength > 0 && maxLength <= this.chartData.chartLabels.length) {
      this.maxChartLength = maxLength;
      this.prepareChartData();
    }
  }

  updateNumberOfBars(number: any) {
    if (number > 0 && number <= this.chartData.chartDatasets.length) {
      this.numberOfBars = number;
      this.prepareChartData();
    }
  }

  setMaxBarThickness(datasets: ChartDataSets[]): ChartDataSets[] {
    return datasets.map(dataset => {
      dataset["maxBarThickness"] = this.maxBarWidth;
      return dataset;
    });
  }

  setDefaultGlobalColor(color: string) {
    Chart.defaults.global.defaultFontColor = color;
  }
}
