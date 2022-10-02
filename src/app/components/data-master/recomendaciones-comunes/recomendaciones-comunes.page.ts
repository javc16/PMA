import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatosMaestrosDTO } from 'app/models/DatosMaestrosDTO';
import { RecomendacionesComunesService } from 'app/services/recomendacionesComunes/recomendaciones-comunes.service';

@Component({
  selector: 'app-recomendaciones-comunes',
  templateUrl: './recomendaciones-comunes.page.html',
  styleUrls: ['./recomendaciones-comunes.page.scss'],
})
export class RecomendacionesComunesPage implements OnInit {
  recomendacionesComunes!: DatosMaestrosDTO[];

  constructor(private recomendacionesComunesService: RecomendacionesComunesService,private router: Router) {
    this.recomendacionesComunesService.getData().subscribe((res: any[])=>{
      this.recomendacionesComunes= res;
      console.log(this.recomendacionesComunes);
    });
  }

  ionViewDidEnter() {
    this.recomendacionesComunesService.getData().subscribe((res: any[]) => {
      this.recomendacionesComunes = res;
      console.log(this.recomendacionesComunes);
    });
  }

  updateRecomendacionesComunes(recomendacionesComunes: DatosMaestrosDTO) {

  }

  deleteRecomendacionesComunes(recomendacionesComunes: DatosMaestrosDTO) {}

  navigateToCreateRecomendacionesComunes() {
    this.router.navigate(['tabs/data-master/recomendaciones-comunes/create-recomendacion-comun']);
  }

  ngOnInit() {}

}
