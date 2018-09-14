import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Title } from '@angular/platform-browser';

import { IMapData } from '../../components/map/map.interface';
import { ITopNavData } from '../../components/top-nav/top-nav.interface';

@Component({
  selector: 'app-sell-report',
  templateUrl: './sell-report.component.html',
  styleUrls: ['./sell-report.component.scss']
})
export class SellReportComponent implements OnInit {
  public ObjectKeys = Object.keys;
  public bannerInfo: ITopNavData;
  public IMapData: IMapData[];
  public parts = {
    part1: {
      partNum: '01',
      partName: '车辆销售',
      detail: {
        totalSales: 0,
        firstProvince: '',
        firstSellCount: 0
      },
      brandSellProvinceOrder: {}
    },
    part2: {
      partNum: '02',
      partName: '库存分布'
    }
  }
  public brandSellProvinceOrder: {
    "欧曼"?: string[],
    "时代"?: string[],
    "欧马可"?: string[],
    "奥铃"?: string[],
    "伽途"?: string[],
    "雷萨"?: string[],
    "普罗科"?: string[]
  } = {};

  constructor(private dataService: DataService, private pageTitle: Title) { }
  async ngOnInit() {
    let {
      title,
      platform,
      startDate,
      endDate,
      totalSales,
      brandSellProvinceOrder } = this.dataService.reportData;
    this.bannerInfo = { title, platform, startDate, endDate, className: 'sell-report' };

    let carsSellData = this.dataService.reportData.carsSell;
    this.IMapData = carsSellData.map(v => {
      let name = Object.keys(v)[0];
      let value = Object.values(v)[0] as number;
      return { name, value };
    }).sort((a, b) => b.value - a.value).slice(0, 3);

    this.parts.part1.detail.totalSales = totalSales;
    this.parts.part1.detail.firstProvince = this.IMapData[0].name;
    this.parts.part1.detail.firstSellCount = this.IMapData[0].value;
    this.brandSellProvinceOrder = brandSellProvinceOrder;
  }
}
