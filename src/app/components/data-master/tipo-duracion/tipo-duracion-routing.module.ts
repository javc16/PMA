import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TipoDuracionPage } from './tipo-duracion.page';

const routes: Routes = [
  {
    path: '',
    component: TipoDuracionPage
  },
  {
    path: 'create-tipo-duracion',
    loadChildren: () => import('./create-tipo-duracion/create-tipo-duracion.module').then( m => m.CreateTipoDuracionPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TipoDuracionPageRoutingModule {}
