import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TipoMedicamentosPage } from './tipo-medicamentos.page';

const routes: Routes = [
  {
    path: '',
    component: TipoMedicamentosPage
  },
  {
    path: 'create-tipo-medicamento',
    loadChildren: () => import('./create-tipo-medicamento/create-tipo-medicamento.module').then( m => m.CreateTipoMedicamentoPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TipoMedicamentosPageRoutingModule {}
