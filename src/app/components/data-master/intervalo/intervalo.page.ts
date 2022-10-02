import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatosMaestrosDTO } from 'app/models/DatosMaestrosDTO';
import { IntervaloService } from 'app/services/intervalo/intervalo.service';

@Component({
  selector: 'app-intervalo',
  templateUrl: './intervalo.page.html',
  styleUrls: ['./intervalo.page.scss'],
})
export class IntervaloPage implements OnInit {
  intervalo!: DatosMaestrosDTO[];

  constructor(
    private intervaloService: IntervaloService,
    private router: Router
  ) {
    this.intervaloService.getData().subscribe((res: any[]) => {
      this.intervalo = res;
      console.log(this.intervalo);
    });
  }

  ionViewDidEnter() {
    this.intervaloService.getData().subscribe((res: any[]) => {
      this.intervalo = res;
      console.log(this.intervalo);
    });
  }

  updateMedicamento(medicamento: DatosMaestrosDTO) {}

  deleteMedicamento(medicamento: DatosMaestrosDTO) {}

  navigateToCreateIntervalo() {
    this.router.navigate(['tabs/data-master/intervalo/create-intervalo']);
  }

  ngOnInit() {}
}
