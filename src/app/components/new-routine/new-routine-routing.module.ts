import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewRoutinePage } from './new-routine.page';

const routes: Routes = [
  {
    path: '',
    component: NewRoutinePage,
  },
  {
    path: 'medicamento-rutina',
    loadChildren: () =>
      import('./medicamento-rutina/medicamento-rutina.module').then(
        (m) => m.MedicamentoRutinaPageModule
      ),
  },
  {
    path: 'unidades-de-medida-rutina',
    loadChildren: () =>
      import(
        './unidades-de-medida-rutina/unidades-de-medida-rutina.module'
      ).then((m) => m.UnidadesDeMedidaRutinaPageModule),
  },
  {
    path: 'duracion-rutina',
    loadChildren: () => import('./duracion-rutina/duracion-rutina.module').then( m => m.DuracionRutinaPageModule)
  },
  {
    path: 'fecha-rutina',
    loadChildren: () => import('./fecha-rutina/fecha-rutina.module').then( m => m.FechaRutinaPageModule)
  },
  {
    path: 'summary-rutina',
    loadChildren: () => import('./summary-rutina/summary-rutina.module').then( m => m.SummaryRutinaPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewRoutinePageRoutingModule {}
