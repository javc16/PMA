import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecomendacionesComunesPage } from './recomendaciones-comunes.page';

const routes: Routes = [
  {
    path: '',
    component: RecomendacionesComunesPage,
  },
  {
    path: 'create-recomendacion-comun',
    loadChildren: () =>
      import(
        './create-recomendacion-comun/create-recomendacion-comun.module'
      ).then((m) => m.CreateRecomendacionComunPageModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecomendacionesComunesPageRoutingModule {}
