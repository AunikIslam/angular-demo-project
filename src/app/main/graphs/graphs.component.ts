import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api-calls/api-calls-service';

@Component({
  selector: 'app-graphs',
  templateUrl: './graphs.component.html',
  styleUrls: ['./graphs.component.css']
})
export class GraphsComponent implements OnInit {

  chartData: any;
  totalItems: any [] = [];
  constructor(private apiService: ApiService) { }

  ngOnInit() {
    const apiUrl = 'https://api.bcb.gov.br/dados/serie/bcdata.sgs.20716/dados/ultimos/10?formato=json';
    this.apiService.getData(apiUrl).subscribe(pResponse => {
      const dataList: any[] = [];
      const categories: any[] = [];
      this.totalItems = pResponse;
      this.totalItems.forEach(pItem => {
        dataList.push(pItem.valor);
        categories.push(pItem.data);

      });
      this.chartData = {
        series: [
          {
            name: "Value",
            data: dataList
          }
        ],
        chart: {
          height: 350,
          type: "bar"
        },
        plotOptions: {
          bar: {
            dataLabels: {
              position: "top" // top, center, bottom
            }
          }
        },
        dataLabels: {
          enabled: true,
          formatter: function(val) {
            return val + "%";
          },
          offsetY: -20,
          style: {
            fontSize: "12px",
            colors: ["#304758"]
          }
        },
  
        xaxis: {
          categories: categories,
          position: "bottom",
          labels: {
            offsetY: -5
          },
          axisBorder: {
            show: false
          },
          axisTicks: {
            show: false
          },
          crosshairs: {
            fill: {
              type: "gradient",
              gradient: {
                colorFrom: "#D8E3F0",
                colorTo: "#BED1E6",
                stops: [0, 100],
                opacityFrom: 0.4,
                opacityTo: 0.5
              }
            }
          },
          tooltip: {
            enabled: false,
            offsetY: -35
          }
        },
        fill: {
          type: "gradient",
          gradient: {
            shade: "light",
            type: "horizontal",
            shadeIntensity: 0,
            gradientToColors: undefined,
            inverseColors: true,
            opacityFrom: 1,
            opacityTo: 1,
            stops: [50, 0, 100, 100]
          }
        },
        yaxis: {
          axisBorder: {
            show: false
          },
          axisTicks: {
            show: false
          },
          labels: {
            show: false,
            formatter: function(val) {
              return val + "%";
            }
          }
        },
        title: {
          text: "Brazil Central Bank data",
          floating: 0,
          offsetY: 330,
          align: "center",
          style: {
            color: "#444"
          }
        }
      };
    });
  }

}