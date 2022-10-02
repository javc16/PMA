import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FechaRutinaPageRoutingModule } from './fecha-rutina-routing.module';

import { FechaRutinaPage } from './fecha-rutina.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FechaRutinaPageRoutingModule
  ],
  declarations: [FechaRutinaPage]
})
export class FechaRutinaPageModule {}
