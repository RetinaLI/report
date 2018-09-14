import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TopNavComponent } from '../components/top-nav/top-nav.component';
import { PartTitleComponent } from '../components/part-title/part-title.component';
import { MapComponent } from '../components/map/map.component';
import { PieComponent } from '../components/pie/pie.component';

import { NumberFormaterPipe } from '../pipes/number-formater.pipe';

const IMPORT_LIST = [CommonModule];

const DECLARATION_LIST = [
  TopNavComponent,
  PartTitleComponent,
  MapComponent,
  PieComponent,
  NumberFormaterPipe
];
const EXPORT_LIST = (IMPORT_LIST as any[]).concat(DECLARATION_LIST);

@NgModule({
  imports: IMPORT_LIST,
  exports: EXPORT_LIST,
  declarations: DECLARATION_LIST
})
export class SharedModule { }