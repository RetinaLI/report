import { Injectable } from '@angular/core';
import { AjaxService } from './ajax.service';
import queryString from 'query-string';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  reportData: {
    title?: string,
    platform?: string,
    startDate?: string,
    endDate?: string,
    carsSell?: {}[],
    totalSales?: number,
    brandSellProvinceOrder?: {},

    //服务报告模块
    enterInfo?: {},
    brandCarEnterTotal?: {}[],
    trueScale?: {}[],
    facticityList?: {}[]
  } = {};

  private apiUrl: string = '';

  chinaJson: {} = {};

  constructor(private ajaxService: AjaxService) {
    this.apiUrl = queryString.parse(document.location.search).data;
  }

  async getReportData(params?: any) {
    let result = await this.ajaxService.get(this.apiUrl, params);
    this.reportData = result.data;
  }

  async getChinaJson() {
    let result = await this.ajaxService.get('assets/json/china.json', null);
    this.chinaJson = result;
  }
}
