import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateTipoDuracionPageRoutingModule } from './create-tipo-duracion-routing.module';

import { CreateTipoDuracionPage } from './create-tipo-duracion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreateTipoDuracionPageRoutingModule
  ],
  declarations: [CreateTipoDuracionPage]
})
export class CreateTipoDuracionPageModule {}
