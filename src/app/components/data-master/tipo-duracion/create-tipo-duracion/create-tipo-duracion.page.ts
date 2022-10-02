import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { DatosMaestrosDTO } from 'app/models/DatosMaestrosDTO';
import { TipoDuracionService } from 'app/services/tipoDuracion/tipo-duracion.service';
import { ToastService } from 'app/services/toast/toast.service';

@Component({
  selector: 'app-create-tipo-duracion',
  templateUrl: './create-tipo-duracion.page.html',
  styleUrls: ['./create-tipo-duracion.page.scss'],
})
export class CreateTipoDuracionPage implements OnInit {
  tipoDuracion: DatosMaestrosDTO = new DatosMaestrosDTO();

  constructor(
    private tipoDuracionService: TipoDuracionService,
    private router: Router,
    private toastService: ToastService
  ) {}

  ngOnInit() {
    this.resetForm();
  }

  onSubmit(form: NgForm) {
    if (this.tipoDuracion !== null) {
      this.tipoDuracionService
        .createMedicamento(this.tipoDuracion)
        .subscribe((data: any) => {
          if (data.status) {
            this.resetForm(form);
            this.toastService.presentToast(
              data.message,
              'success'
            );
            this.router.navigateByUrl('/tabs/data-master/tipo-duracion');
          } else {
            this.toastService.presentToast(data.message, 'danger');
          }
        });
    }
  }

  resetForm(form?: NgForm) {
    if (form != null) {
      form.reset();
      this.tipoDuracion = {
        id:null,
        nombre: '',
        descripcion: '',
      };
    }
  }
}
