import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SummaryRutinaPageRoutingModule } from './summary-rutina-routing.module';

import { SummaryRutinaPage } from './summary-rutina.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SummaryRutinaPageRoutingModule
  ],
  declarations: [SummaryRutinaPage]
})
export class SummaryRutinaPageModule {}
