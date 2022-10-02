import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FechaRutinaPage } from './fecha-rutina.page';

const routes: Routes = [
  {
    path: '',
    component: FechaRutinaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FechaRutinaPageRoutingModule {}
