import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DuracionRutinaPageRoutingModule } from './duracion-rutina-routing.module';

import { DuracionRutinaPage } from './duracion-rutina.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DuracionRutinaPageRoutingModule
  ],
  declarations: [DuracionRutinaPage]
})
export class DuracionRutinaPageModule {}
