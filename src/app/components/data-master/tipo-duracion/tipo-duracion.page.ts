import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatosMaestrosDTO } from 'app/models/DatosMaestrosDTO';
import { TipoDuracionService } from 'app/services/tipoDuracion/tipo-duracion.service';

@Component({
  selector: 'app-tipo-duracion',
  templateUrl: './tipo-duracion.page.html',
  styleUrls: ['./tipo-duracion.page.scss'],
})
export class TipoDuracionPage implements OnInit {
  tipoDuracion!: DatosMaestrosDTO[];

  constructor(private tipoDuracionService: TipoDuracionService,private router: Router) {
    this.tipoDuracionService.getData().subscribe((res: any[])=>{
      this.tipoDuracion= res;
      console.log(this.tipoDuracion);
    });
  }

  ionViewDidEnter() {
    this.tipoDuracionService.getData().subscribe((res: any[]) => {
      this.tipoDuracion = res;
      console.log(this.tipoDuracion);
    });
  }

  updateMedicamento(tipoDuracion: DatosMaestrosDTO) {

  }

  deleteMedicamento(tipoDuracion: DatosMaestrosDTO) {}

  navigateToCreateMedicamentos() {
    this.router.navigate(['tabs/data-master/tipo-duracion/create-tipo-duracion']);
  }

  ngOnInit() {}
}
