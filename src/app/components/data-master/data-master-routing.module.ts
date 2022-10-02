import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DataMasterPage } from './data-master.page';

const routes: Routes = [
  {
    path: '',
    component: DataMasterPage
  },
  {
    path: 'medicamentos',
    loadChildren: () => import('./medicamentos/medicamentos.module').then( m => m.MedicamentosPageModule)
  },
  {
    path: 'tipo-medicamentos',
    loadChildren: () => import('./tipo-medicamentos/tipo-medicamentos.module').then( m => m.TipoMedicamentosPageModule)
  },
  {
    path: 'intervalo',
    loadChildren: () => import('./intervalo/intervalo.module').then( m => m.IntervaloPageModule)
  },
  {
    path: 'recomendaciones',
    loadChildren: () => import('./recomendaciones/recomendaciones.module').then( m => m.RecomendacionesPageModule)
  },
  {
    path: 'recomendaciones-comunes',
    loadChildren: () => import('./recomendaciones-comunes/recomendaciones-comunes.module').then( m => m.RecomendacionesComunesPageModule)
  },
  {
    path: 'tipo-duracion',
    loadChildren: () => import('./tipo-duracion/tipo-duracion.module').then( m => m.TipoDuracionPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DataMasterPageRoutingModule {}
