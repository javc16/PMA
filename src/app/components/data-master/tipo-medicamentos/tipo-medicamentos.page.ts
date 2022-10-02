import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatosMaestrosDTO } from 'app/models/DatosMaestrosDTO';
import { TipoMedicamentoService } from 'app/services/tipoMedicamento/tipo-medicamento.service';

@Component({
  selector: 'app-tipo-medicamentos',
  templateUrl: './tipo-medicamentos.page.html',
  styleUrls: ['./tipo-medicamentos.page.scss'],
})
export class TipoMedicamentosPage implements OnInit {
  tipoMedicamento!: DatosMaestrosDTO[];

  constructor(private tipoDuracionService: TipoMedicamentoService,private router: Router) {
    this.tipoDuracionService.getData().subscribe((res: any[])=>{
      this.tipoMedicamento= res;
      console.log(this.tipoMedicamento);
    });
  }

  ionViewDidEnter() {
    this.tipoDuracionService.getData().subscribe((res: any[]) => {
      this.tipoMedicamento = res;
      console.log(this.tipoMedicamento);
    });
  }

  updateMedicamento(tipoMedicamento: DatosMaestrosDTO) {

  }

  deleteMedicamento(tipoMedicamento: DatosMaestrosDTO) {}

  navigateToCreateTipoMedicamento() {
    this.router.navigate(['tabs/data-master/tipo-medicamentos/create-tipo-medicamento']);
  }

  ngOnInit() {}
}
