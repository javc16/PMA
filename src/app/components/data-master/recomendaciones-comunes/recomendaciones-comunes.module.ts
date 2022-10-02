import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecomendacionesComunesPageRoutingModule } from './recomendaciones-comunes-routing.module';

import { RecomendacionesComunesPage } from './recomendaciones-comunes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecomendacionesComunesPageRoutingModule
  ],
  declarations: [RecomendacionesComunesPage]
})
export class RecomendacionesComunesPageModule {}
