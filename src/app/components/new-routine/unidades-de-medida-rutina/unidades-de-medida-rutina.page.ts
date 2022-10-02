import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { DatosMaestrosDTO } from 'app/models/DatosMaestrosDTO';
import { RutinaDTO } from 'app/models/RutinaDTO';
import { IntervaloService } from 'app/services/intervalo/intervalo.service';
import { MedicamentoService } from 'app/services/medicamento/medicamento.service';
import { TipoMedicamentoService } from 'app/services/tipoMedicamento/tipo-medicamento.service';

@Component({
  selector: 'app-unidades-de-medida-rutina',
  templateUrl: './unidades-de-medida-rutina.page.html',
  styleUrls: ['./unidades-de-medida-rutina.page.scss'],
})
export class UnidadesDeMedidaRutinaPage implements OnInit {
  rutina: RutinaDTO = new RutinaDTO();
  intervalos!: DatosMaestrosDTO[];
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private medicamentoService: MedicamentoService,
    private intervaloService: IntervaloService,
    private tipoMedicamentoService: TipoMedicamentoService
  ) {
    this.route.queryParams.subscribe((params) => {
      if (params && params.special) {
        this.rutina = JSON.parse(params.special);
        console.log(this.rutina);
        this.medicamentoService
          .getDataId(this.rutina.idMedicamento)
          .subscribe((res: any) => {
            this.rutina.medicamento = res.data;
          });
        this.tipoMedicamentoService
          .getDataId(this.rutina.idTipoDeMedicamento)
          .subscribe((res: any) => {
            this.rutina.tipoDeMedicamento = res.data;
            console.log(this.rutina);
          });
      }
    });
    this.intervaloService.getData().subscribe((res: any[]) => {
      this.intervalos = res;
      console.log(this.intervalos);
    });
  }

  navigateToTipoMedicamentoRutina() {
    this.router.navigate(['tabs/new-routine']);
  }

  navigateTo() {
    const savedRutina = this.rutina;
    this.rutina = new RutinaDTO();
    const navigationExtras: NavigationExtras = {
      queryParams: {
        special: JSON.stringify(savedRutina),
      },
    };
    this.router.navigate(
      ['tabs/new-routine/duracion-rutina'],
      navigationExtras
    );
  }

  ngOnInit() {}
}
