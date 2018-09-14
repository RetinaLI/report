import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { ITopNavData } from '../../components/top-nav/top-nav.interface';
import { IAccountIfAddData } from '../../components/account-if-add/account-if-add.interface';

@Component({
  selector: 'app-logistic-report',
  templateUrl: './logistic-report.component.html',
  styleUrls: ['./logistic-report.component.scss']
})
export class LogisticReportComponent implements OnInit {
  public bannerInfo: ITopNavData;
  public accountIfAddData: IAccountIfAddData[];
  public parts = {
    part1: {
      partNum: '01',
      partName: '运输资源'
    }
  }
  constructor(private dataService: DataService) { }

  ngOnInit() {
    let {
      title,
      platform,
      startDate,
      endDate} = this.dataService.reportData;
    this.bannerInfo = { title, platform, startDate, endDate, className: 'logistic-report' };
    this.accountIfAddData = this.dataService.reportData.accountAddCondition;
  }

}
