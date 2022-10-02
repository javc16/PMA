import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { DatosMaestrosDTO } from 'app/models/DatosMaestrosDTO';
import { RutinaDTO } from 'app/models/RutinaDTO';
import { MedicamentoService } from 'app/services/medicamento/medicamento.service';
import { TipoMedicamentoService } from 'app/services/tipoMedicamento/tipo-medicamento.service';

@Component({
  selector: 'app-new-routine',
  templateUrl: './new-routine.page.html',
  styleUrls: ['./new-routine.page.scss'],
})
export class NewRoutinePage implements OnInit {
  tipoMedicamento!: DatosMaestrosDTO[];
  idTipoMedicamentoSeleccionado: number;
  medicamentos!: DatosMaestrosDTO[];
  idMedicamentoSeleccionado: number;
  rutina: RutinaDTO = new RutinaDTO();
  constructor(
    private tipoDuracionService: TipoMedicamentoService,
    private router: Router,
    private medicamentoService: MedicamentoService
  ) {
    this.tipoDuracionService.getData().subscribe((res: any[]) => {
      this.tipoMedicamento = res;
      console.log(this.tipoMedicamento);
    });
    this.medicamentoService.getData().subscribe((res: any[]) => {
      this.medicamentos = res;
      console.log(this.medicamentos);
    });
  }
  ionViewDidEnter() {
    this.rutina = new RutinaDTO();
  }

  navigateToMedicamentoRutina() {
    const savedRutina = this.rutina;
    this.rutina = new RutinaDTO();
    const navigationExtras: NavigationExtras = {
      queryParams: {
        special: JSON.stringify(savedRutina),
      },
    };
    this.router.navigate(
      ['tabs/new-routine/unidades-de-medida-rutina'],
      navigationExtras
    );
  }

  ngOnInit() {}
}
