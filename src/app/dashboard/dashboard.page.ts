import { Component, OnInit } from '@angular/core';
import { ChartConfiguration } from 'chart.js';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  slideOpts = {
    slidesPerView: 2,
    spaceBetween: 5,
    centeredSlides: false
  };
  sliderConfig = {
    slidesPerView: 2,
    spaceBetween: 10,
    centeredSlides: false
  };

  public barChartLegend = true;
  public barChartPlugins = [];

  public barChartData: ChartConfiguration<'bar'>['data'] = {
    labels: [ 't', 'w', 't', 'f', 's', 's', 'm' ],
    datasets: [
      {
        data: [ 10, 9, 6, 8, 9.5, 4, 6 ],
        borderRadius: 15,
        barThickness: 15,
        backgroundColor: ["#c2ff4d","#c2ff4d","#bdb3ff","#bdb3ff","#c2ff4d","#bdb3ff","#bdb3ff"]},]
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
  constructor() { }

  ngOnInit() {
  }

}
