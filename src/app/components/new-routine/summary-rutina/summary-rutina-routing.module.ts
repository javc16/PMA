import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SummaryRutinaPage } from './summary-rutina.page';

const routes: Routes = [
  {
    path: '',
    component: SummaryRutinaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SummaryRutinaPageRoutingModule {}
