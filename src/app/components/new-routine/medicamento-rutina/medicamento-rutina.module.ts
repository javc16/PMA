import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MedicamentoRutinaPageRoutingModule } from './medicamento-rutina-routing.module';

import { MedicamentoRutinaPage } from './medicamento-rutina.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MedicamentoRutinaPageRoutingModule
  ],
  declarations: [MedicamentoRutinaPage]
})
export class MedicamentoRutinaPageModule {}
