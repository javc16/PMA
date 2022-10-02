import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IntervaloPageRoutingModule } from './intervalo-routing.module';

import { IntervaloPage } from './intervalo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IntervaloPageRoutingModule
  ],
  declarations: [IntervaloPage]
})
export class IntervaloPageModule {}
