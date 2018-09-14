import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PvComponent } from './pv.component';

const routes: Routes = [
  { path: '', component: PvComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PvRoutingModule { }
