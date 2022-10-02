import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MedicamentoRutinaPage } from './medicamento-rutina.page';

const routes: Routes = [
  {
    path: '',
    component: MedicamentoRutinaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MedicamentoRutinaPageRoutingModule {}
