import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MedicamentosPage } from './medicamentos.page';

const routes: Routes = [
  {
    path: '',
    component: MedicamentosPage
  },
  {
    path: 'create-medicamento',
    loadChildren: () => import('./create-medicamento/create-medicamento.module').then( m => m.CreateMedicamentoPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MedicamentosPageRoutingModule {}
