import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PvRoutingModule } from './pv-routing.module';
import { PvComponent } from './pv.component';

@NgModule({
  imports: [
    CommonModule,
    PvRoutingModule
  ],
  declarations: [PvComponent]
})
export class PvModule { }
