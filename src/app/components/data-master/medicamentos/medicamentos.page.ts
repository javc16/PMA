import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatosMaestrosDTO } from 'app/models/DatosMaestrosDTO';
import { MedicamentoService } from 'app/services/medicamento/medicamento.service';

@Component({
  selector: 'app-medicamentos',
  templateUrl: './medicamentos.page.html',
  styleUrls: ['./medicamentos.page.scss'],
})
export class MedicamentosPage implements OnInit {
  medicamento!: DatosMaestrosDTO[];

  constructor(private medicamentoService: MedicamentoService,private router: Router) {
    this.medicamentoService.getData().subscribe((res: any[])=>{
      this.medicamento= res;
      console.log(this.medicamento);
    });
  }

  ionViewDidEnter() {
    this.medicamentoService.getData().subscribe((res: any[]) => {
      this.medicamento = res;
      console.log(this.medicamento);
    });
  }

  updateMedicamento(medicamento: DatosMaestrosDTO) {

  }

  deleteMedicamento(medicamento: DatosMaestrosDTO) {}

  navigateToCreateMedicamentos() {
    this.router.navigate(['tabs/data-master/medicamentos/create-medicamento']);
  }

  ngOnInit() {}
}
