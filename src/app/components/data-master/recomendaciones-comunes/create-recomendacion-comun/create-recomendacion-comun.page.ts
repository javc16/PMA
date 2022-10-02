import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { DatosMaestrosDTO } from 'app/models/DatosMaestrosDTO';
import { RecomendacionesComunesService } from 'app/services/recomendacionesComunes/recomendaciones-comunes.service';
import { ToastService } from 'app/services/toast/toast.service';

@Component({
  selector: 'app-create-recomendacion-comun',
  templateUrl: './create-recomendacion-comun.page.html',
  styleUrls: ['./create-recomendacion-comun.page.scss'],
})
export class CreateRecomendacionComunPage implements OnInit {
  recomendacionesComunes: DatosMaestrosDTO = new DatosMaestrosDTO();

  constructor(
    private recomendacionesComunesService: RecomendacionesComunesService,
    private router: Router,
    private toastService: ToastService
  ) {}

  ngOnInit() {
    this.resetForm();
  }

  onSubmit(form: NgForm) {
    if (this.recomendacionesComunes !== null) {
      this.recomendacionesComunesService
        .createMedicamento(this.recomendacionesComunes)
        .subscribe((data: any) => {
          if (data.status) {
            this.resetForm(form);
            this.toastService.presentToast(
              data.message,
              'success'
            );
            this.router.navigateByUrl('/tabs/data-master/recomendaciones-comunes');
          } else {
            this.toastService.presentToast(data.message, 'danger');
          }
        });
    }
  }

  resetForm(form?: NgForm) {
    if (form != null) {
      form.reset();
      this.recomendacionesComunes = {
        id:null,
        nombre: '',
        descripcion: '',
      };
    }
  }
}
