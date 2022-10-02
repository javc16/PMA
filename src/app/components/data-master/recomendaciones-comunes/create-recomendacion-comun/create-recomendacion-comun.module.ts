import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateRecomendacionComunPageRoutingModule } from './create-recomendacion-comun-routing.module';

import { CreateRecomendacionComunPage } from './create-recomendacion-comun.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreateRecomendacionComunPageRoutingModule
  ],
  declarations: [CreateRecomendacionComunPage]
})
export class CreateRecomendacionComunPageModule {}
