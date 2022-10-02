import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TipoMedicamentosPageRoutingModule } from './tipo-medicamentos-routing.module';

import { TipoMedicamentosPage } from './tipo-medicamentos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TipoMedicamentosPageRoutingModule
  ],
  declarations: [TipoMedicamentosPage]
})
export class TipoMedicamentosPageModule {}
