import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { ApiService } from '../api-calls/api-calls-service';

@Component({
  selector: 'app-graphs',
  templateUrl: './graphs.component.html',
  styleUrls: ['./graphs.component.css']
})
export class GraphsComponent implements OnInit {

  chartData: any;
  totalItems: any [] = [];

  radialBarChart: any;
  radialBarTotalItems: any [] = [];
  private unsubscribeAll: Subject<void>;
  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.reloadApiOne();
    this.reloadApiTwo();
  }

  reloadApiOne(): void {
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
          offsetY: 30,
          align: "center",
          style: {
            color: "#444"
          }
        }
      };
    });
  }

  reloadApiTwo(): void {
    const url = 'https://api.carbonintensity.org.uk/intensity/date';
    this.apiService.getData(url).subscribe(pResponse => {
      const response = pResponse['data'].slice(0, 3);
      response.forEach(pItem => {
        const series: any[] = [];
        series.push(pItem.intensity.actual);
        series.push(Math.round(((pItem.intensity.forecast / pItem.intensity.actual) * 100)));

        this.radialBarChart = {
          label: pItem.intensity.index,
          fromDate: new Date(pItem.from).toLocaleDateString("en-US"),
          toDate: new Date(pItem.to).toLocaleDateString("en-US"),
          series: series,
          chart: {
            height: 300,
            type: "radialBar"
          },
          plotOptions: {
            radialBar: {
              offsetY: 0,
              startAngle: 0,
              endAngle: 270,
              hollow: {
                margin: 5,
                size: "30%",
                background: "transparent",
                image: undefined
              },
              dataLabels: {
                name: {
                  show: true
                },
                value: {
                  show: false
                }
              }
            }
          },
          colors: ["#1ab7ea", "#0084ff"],
          labels: ["Actual", "Forecast"],
          legend: {
            show: true,
            floating: true,
            fontSize: "12px",
            position: "left",
            offsetX: 0,
            offsetY: 10,
            labels: {
              useSeriesColors: true
            },
            formatter: function(seriesName, opts) {
              if(opts.seriesIndex == 0){
                return seriesName + ":  " + pItem.intensity.actual;
              }
              else {
                return seriesName + ":  " + pItem.intensity.forecast;
              }
              
            },
            itemMargin: {
              horizontal: 3
            }
          },
          responsive: [
            {
              breakpoint: 480,
              options: {
                legend: {
                  show: true
                }
              }
            }
          ]
        };
        this.radialBarTotalItems.push(this.radialBarChart);
      });
    })
  }

  ngOnDestroy(){
    this.unsubscribeAll.next();
    this.unsubscribeAll.complete();
  }

}