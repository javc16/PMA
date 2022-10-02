import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateTipoDuracionPage } from './create-tipo-duracion.page';

const routes: Routes = [
  {
    path: '',
    component: CreateTipoDuracionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateTipoDuracionPageRoutingModule {}
