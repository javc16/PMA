import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-data-master',
  templateUrl: './data-master.page.html',
  styleUrls: ['./data-master.page.scss'],
})
export class DataMasterPage implements OnInit {

  constructor( private router: Router) { }

  ngOnInit() {
  }

  navigateToMedicamentos() {
    this.router.navigate(['tabs/data-master/medicamentos']);
  }

  navigateToTipoMedicamentos() {
    this.router.navigate(['tabs/data-master/tipo-medicamentos']);
  }

  navigateToRecomendaciones() {
    this.router.navigate(['tabs/data-master/recomendaciones']);
  }

  navigateToRecomendacionesComunes() {
    this.router.navigate(['tabs/data-master/recomendaciones-comunes']);
  }

  navigateToTipoDuracion() {
    this.router.navigate(['tabs/data-master/tipo-duracion']);
  }

  navigateToIntervalo() {
    this.router.navigate(['tabs/data-master/intervalo']);
  }

}
