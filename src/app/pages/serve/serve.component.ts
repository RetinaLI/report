import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Title } from '@angular/platform-browser';

import { IPieData } from '../../components/pie/pie.interface';
import { ITopNavData } from '../../components/top-nav/top-nav.interface';


@Component({
  selector: 'app-serve',
  templateUrl: './serve.component.html',
  styleUrls: ['./serve.component.scss']
})
export class ServeComponent implements OnInit {
  public bannerInfo: ITopNavData;
  public IPieData: IPieData[];
  public parts = {
    part1: {
      partNum: '01',
      partName: '进站统计',
      enterInfo: {},
      brandCarEnterTotal: []
    },
    part2: {
      partNum: '02',
      partName: '服务真实性',
      trueScale: [],
      facticityList: []
    }
  }

  constructor(private dataService: DataService, private pageTitle: Title) { }

  ngOnInit() {
    let {
      title,
      platform,
      startDate,
      endDate,
      enterInfo,
      brandCarEnterTotal,
      trueScale} = this.dataService.reportData;
    
    this.bannerInfo = { title, platform, startDate, endDate, className: 'serve' };
    this.parts.part1.brandCarEnterTotal = brandCarEnterTotal;
    this.parts.part1.enterInfo = enterInfo;
    this.parts.part2.trueScale = trueScale
  }

}
