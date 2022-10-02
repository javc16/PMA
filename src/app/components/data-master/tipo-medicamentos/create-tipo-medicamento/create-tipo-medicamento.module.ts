import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateTipoMedicamentoPageRoutingModule } from './create-tipo-medicamento-routing.module';

import { CreateTipoMedicamentoPage } from './create-tipo-medicamento.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreateTipoMedicamentoPageRoutingModule
  ],
  declarations: [CreateTipoMedicamentoPage]
})
export class CreateTipoMedicamentoPageModule {}
