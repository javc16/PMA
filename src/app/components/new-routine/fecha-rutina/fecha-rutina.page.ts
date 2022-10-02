import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { RutinaDTO } from 'app/models/RutinaDTO';
import { TipoDuracionService } from 'app/services/tipoDuracion/tipo-duracion.service';

@Component({
  selector: 'app-fecha-rutina',
  templateUrl: './fecha-rutina.page.html',
  styleUrls: ['./fecha-rutina.page.scss'],
})
export class FechaRutinaPage implements OnInit {
  rutina: RutinaDTO = new RutinaDTO();

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private tipoDuracionService: TipoDuracionService
  ) {
    this.route.queryParams.subscribe((params) => {
      if (params && params.special) {
        this.rutina = JSON.parse(params.special);
        console.log('aqui');
        console.log(this.rutina);
        this.tipoDuracionService
          .getDataId(this.rutina.idTipoDuracion)
          .subscribe((res: any) => {
            this.rutina.tipoDuracion = res.data;
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
    this.router.navigate(
      ['tabs/new-routine/summary-rutina'],
      navigationExtras
    );
  }

  ngOnInit() {}
}
