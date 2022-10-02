import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateIntervaloPageRoutingModule } from './create-intervalo-routing.module';

import { CreateIntervaloPage } from './create-intervalo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreateIntervaloPageRoutingModule
  ],
  declarations: [CreateIntervaloPage]
})
export class CreateIntervaloPageModule {}
