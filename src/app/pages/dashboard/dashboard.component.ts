import { Component, OnInit } from '@angular/core';
import { AwsIotService } from 'src/app/services/service.index';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styles: []
})
export class DashboardComponent implements OnInit {

  lastData: any = {};

  chartFinish = false;

  dataQuantity = 7;

  // lineChart
    lineChartData: Array<any> = [
      {data: [], label: 'Ph'},
      {data: [], label: 'Temperatura'},
      {data: [], label: 'Orp'}
    ];
    lineChartLabels: Array<any> = [];
    lineChartOptions: any = {
      responsive: true
    };
    lineChartLegend = true;
    lineChartType = 'line';

  constructor(_awsIotService: AwsIotService) {
    // _awsIotService.getData(1, 'topic_2').subscribe((data) => { this.data = data; });
    _awsIotService.getData(this.dataQuantity, 'topic_2').subscribe((data) => {
                                                this.lastData = Object.assign({}, data[0]); // store last data deep
                                                this.lastData.timestamp = this.timeConverter(this.lastData.timestamp); // Re format date
                                                data.forEach((arrayItem) => {
                                                  this.lineChartData[0].data.unshift(arrayItem.ph);
                                                  this.lineChartData[1].data.unshift(arrayItem.temperature);
                                                  this.lineChartData[2].data.unshift(arrayItem.orp);
                                                  this.lineChartLabels.unshift(this.timeConverter(arrayItem.timestamp));
                                                });
                                                this.chartFinish = true;
                                              });

   }

  ngOnInit() {
  }

  public chartClicked(e:any):void {
    console.log(e);
  }

  public chartHovered(e:any):void {
    console.log(e);
  }

  public timeConverter(UNIX_timestamp) {
    const ts = new Date(parseInt(UNIX_timestamp, 10));
    const options = { day: '2-digit', month: '2-digit', year: '2-digit', hour: '2-digit', minute: '2-digit' };
    const dateLocale = ts.toLocaleDateString('es-ar', options);
    return dateLocale;
  }

}
