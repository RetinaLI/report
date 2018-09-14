import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../../services/data.service';
import { IMapData } from './map.interface';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  @Input() IMapData: IMapData[];

  private option = {
    backgroundColor: '#fff',
    tooltip: {
      show: false
    },
    grid: {
      top: 10,
      left: 10,
      right: 10
    },
    visualMap: {
      show: true,
      min: 0,
      max: 1000,
      type: 'continuous',
      inRange: {
        color: ['#86A5FD', '#4979FF']
      },
      right: 0,
      bottom: 0,
      orient: 'horizontal',
      inverse: true,
      itemWidth: 6,
      itemHeight: 120,
      text: ['销量高', '销量低'],
      textStyle: {
        color: '#aaa'
      }
    },
    series: [{
      type: 'map',
      map: 'china',
      label: {
        normal: {
          show: false
        },
        emphasis: {
          show: false
        }
      },
      zoom: 1.1,
      itemStyle: {
        normal: {
          areaColor: '#EDF2FF',
          borderColor: '#fff',
          borderWidth: 0
        },
        emphasis: {
          areaColor: '#EDF2FF'
        }
      },
      data: []
    }]
  };

  constructor(private dataService: DataService) { }

  async ngOnInit() {
    await this.dataService.getChinaJson();
    echarts.registerMap('china', this.dataService.chinaJson);
    this.option.series[0].data = this.IMapData;
    let chart = echarts.init(document.getElementById('chart'));
    chart.setOption(this.option);
  }
}
