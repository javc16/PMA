import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IntervaloPage } from './intervalo.page';

const routes: Routes = [
  {
    path: '',
    component: IntervaloPage
  },
  {
    path: 'create-intervalo',
    loadChildren: () => import('./create-intervalo/create-intervalo.module').then( m => m.CreateIntervaloPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IntervaloPageRoutingModule {}
