import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DatosMaestrosDTO } from 'app/models/DatosMaestrosDTO';
import { MedicamentoService } from 'app/services/medicamento/medicamento.service';

@Component({
  selector: 'app-medicamento-rutina',
  templateUrl: './medicamento-rutina.page.html',
  styleUrls: ['./medicamento-rutina.page.scss'],
})
export class MedicamentoRutinaPage implements OnInit {
  idTipoMedicamento: any;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private medicamentoService: MedicamentoService
  ) {
    this.route.queryParams.subscribe((params) => {
      if (params && params.special) {
        this.idTipoMedicamento = JSON.parse(params.special);
        console.log(this.idTipoMedicamento);
      }
    });
  }

  navigateToTipoMedicamentoRutina(){
    this.router.navigate(['tabs/new-routine']);
  }

  ngOnInit() {}
}
