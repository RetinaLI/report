import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../../services/data.service';
import { IPieData } from './pie.interface';

@Component({
  selector: 'app-pie',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.scss']
})
export class PieComponent implements OnInit {

  @Input() IPieData: IPieData[];

  private option = {
    tooltip: {
      trigger: 'item',
      formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    legend: {
      orient: 'vertical',
      x: 'left',
      data:['真实','不真实','无法判断']
    },
    series: [
      {
          name:'服务情况',
          type:'pie',
          radius: ['50%', '70%'],
          avoidLabelOverlap: false,
          label: {
              normal: {
                  show: false,
                  position: 'center'
              },
              emphasis: {
                  show: true,
                  textStyle: {
                      fontSize: '30',
                      fontWeight: 'bold'
                  }
              }
          },
          labelLine: {
              normal: {
                  show: false
              }
          },
          data:[
            {value:335, name:'真实性'},
            {value:310, name:'不真实性'},
            {value:234, name:'联盟广告'},
          ]
      }
    ]
  }

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.option.series[0].data = this.IPieData;
    let chart = echarts.init(document.getElementById('pieChart'));
    chart.setOption(this.option);
  }

}
