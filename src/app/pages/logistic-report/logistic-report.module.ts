import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../providors/share.module';

import { LogisticReportRoutingModule } from './logistic-report-routing.module';
import { LogisticReportComponent } from './logistic-report.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    LogisticReportRoutingModule
  ],
  declarations: [LogisticReportComponent]
})
export class LogisticReportModule { }
