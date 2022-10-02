import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateIntervaloPage } from './create-intervalo.page';

const routes: Routes = [
  {
    path: '',
    component: CreateIntervaloPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateIntervaloPageRoutingModule {}
