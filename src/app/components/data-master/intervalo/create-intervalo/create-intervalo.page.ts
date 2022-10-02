import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { DatosMaestrosDTO } from 'app/models/DatosMaestrosDTO';
import { IntervaloService } from 'app/services/intervalo/intervalo.service';
import { ToastService } from 'app/services/toast/toast.service';

@Component({
  selector: 'app-create-intervalo',
  templateUrl: './create-intervalo.page.html',
  styleUrls: ['./create-intervalo.page.scss'],
})
export class CreateIntervaloPage implements OnInit {
  intervalo: DatosMaestrosDTO = new DatosMaestrosDTO();

  constructor(
    private intervaloService: IntervaloService,
    private router: Router,
    private toastService: ToastService
  ) {}

  ngOnInit() {
    this.resetForm();
  }

  onSubmit(form: NgForm) {
    if (this.intervalo !== null) {
      this.intervaloService
        .createIntervalo(this.intervalo)
        .subscribe((data: any) => {
          if (data.status) {
            this.resetForm(form);
            this.toastService.presentToast(
              'Nuevo Intervalo Creado Correctamente',
              'success'
            );
            this.router.navigateByUrl('/tabs/data-master/intervalo');
          } else {
            this.toastService.presentToast('Ese Intervalo ya existe', 'danger');
          }
        });
    }
  }

  resetForm(form?: NgForm) {
    if (form != null) {
      form.reset();
      this.intervalo = {
        id:null,
        nombre: '',
        descripcion: '',
      };
    }
  }
}
