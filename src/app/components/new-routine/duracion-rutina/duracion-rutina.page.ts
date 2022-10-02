import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { DatosMaestrosDTO } from 'app/models/DatosMaestrosDTO';
import { RutinaDTO } from 'app/models/RutinaDTO';
import { IntervaloService } from 'app/services/intervalo/intervalo.service';
import { TipoDuracionService } from 'app/services/tipoDuracion/tipo-duracion.service';

@Component({
  selector: 'app-duracion-rutina',
  templateUrl: './duracion-rutina.page.html',
  styleUrls: ['./duracion-rutina.page.scss'],
})
export class DuracionRutinaPage implements OnInit {
  rutina: RutinaDTO = new RutinaDTO();
  tipoDuracion!: DatosMaestrosDTO[];
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private tipoDuracionService: TipoDuracionService,
    private intervaloService: IntervaloService
  ) {
    this.route.queryParams.subscribe((params) => {
      if (params && params.special) {
        this.rutina = JSON.parse(params.special);
        console.log(this.rutina);
        this.intervaloService
          .getDataId(this.rutina.idTipoDeIntervalo)
          .subscribe((res: any) => {
            this.rutina.tipoDeIntervalo = res.data;
          });
        this.tipoDuracionService.getData().subscribe((res: any[]) => {
          this.tipoDuracion = res;
          console.log(this.tipoDuracion);
        });
      }
    });
  }

  navigateTo() {
    const savedRutina = this.rutina;
    this.rutina = new RutinaDTO();
    const navigationExtras: NavigationExtras = {
      queryParams: {
        special: JSON.stringify(savedRutina),
      },
    };
    this.router.navigate(['tabs/new-routine/fecha-rutina'], navigationExtras);
  }
  ngOnInit() {}
}
