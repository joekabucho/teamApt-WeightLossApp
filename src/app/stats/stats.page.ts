import { Component } from '@angular/core';
import { ChartConfiguration, ChartOptions } from "chart.js";
@Component({
  selector: 'app-stats',
  templateUrl: 'stats.page.html',
  styleUrls: ['stats.page.scss']
})
export class StatsPage {

  public lineChartData: ChartConfiguration<'line'>['data'] = {
    labels: [
      't',
      'w',
      't',
      'f',
      's',
      's',
      'm',
    ],
    datasets: [
      {
        data: [ 8, 9, 7, 4, 7, 10, 1 ],
        fill: true,
        tension: 0.5,
        borderColor: '#c2ff4d',
        backgroundColor: 'white'
      }
    ]
  };
  public lineChartOptions: ChartOptions<'line'> = {
    responsive: true,
    scales: {
      x: {
        grid: {
          display: false
        }},
      y: {
        grid: {
          display: false
        }
      }
    },
    plugins: {
      legend: {
        display: false,
      },
    }
  };
  public lineChartLegend = false;


  public barChartLegend = true;
  public barChartPlugins = [];

  public barChartData: ChartConfiguration<'bar'>['data'] = {
    labels: [ 't', 'w', 't', 'f', 's', 's', 'm' ],
    datasets: [
      {
        data: [ 10, 9, 6, 8, 9.5, 4, 6 ],
        borderRadius: 15,
        barThickness: 15,
        backgroundColor: ["#bdb3ff","#907dfe","#bdb3ff","#bdb3ff","#907dfe","#bdb3ff","#bdb3ff"]},]
  };

  public barChartData1: ChartConfiguration<'bar'>['data'] = {
    labels: [ 't', 'w', 't', 'f', 's', 's', 'm' ],
    datasets: [
      {
        data: [ 10, 9, 6, 8, 9.5, 4, 6 ],
        borderRadius: 15,
        barThickness: 15,
        backgroundColor: ["#C6DE9AFF","#c2ff4d","#C6DE9AFF","#C6DE9AFF","#c2ff4d","#C6DE9AFF","#c2ff4d"]},]

};

  public barChartOptions: ChartConfiguration<'bar'>['options'] = {
    responsive: true,
    scales: {
      x: {
        grid: {
          display: false
        }},
      y: {
        grid: {
          display: false
        }
      }
    },
    plugins: {
      legend: {
        display: false,
      },
    }
  };
  constructor() {
  }

  ngOnInit() {
  }
}
