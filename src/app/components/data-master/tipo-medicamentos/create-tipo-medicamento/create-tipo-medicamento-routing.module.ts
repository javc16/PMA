import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateTipoMedicamentoPage } from './create-tipo-medicamento.page';

const routes: Routes = [
  {
    path: '',
    component: CreateTipoMedicamentoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateTipoMedicamentoPageRoutingModule {}
