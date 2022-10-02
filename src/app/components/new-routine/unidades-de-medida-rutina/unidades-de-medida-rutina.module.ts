import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UnidadesDeMedidaRutinaPageRoutingModule } from './unidades-de-medida-rutina-routing.module';

import { UnidadesDeMedidaRutinaPage } from './unidades-de-medida-rutina.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UnidadesDeMedidaRutinaPageRoutingModule
  ],
  declarations: [UnidadesDeMedidaRutinaPage]
})
export class UnidadesDeMedidaRutinaPageModule {}
