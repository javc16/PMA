import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DuracionRutinaPage } from './duracion-rutina.page';

const routes: Routes = [
  {
    path: '',
    component: DuracionRutinaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DuracionRutinaPageRoutingModule {}
