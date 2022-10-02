import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TipoDuracionPageRoutingModule } from './tipo-duracion-routing.module';

import { TipoDuracionPage } from './tipo-duracion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TipoDuracionPageRoutingModule
  ],
  declarations: [TipoDuracionPage]
})
export class TipoDuracionPageModule {}
