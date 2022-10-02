import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UnidadesDeMedidaRutinaPage } from './unidades-de-medida-rutina.page';

const routes: Routes = [
  {
    path: '',
    component: UnidadesDeMedidaRutinaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UnidadesDeMedidaRutinaPageRoutingModule {}
