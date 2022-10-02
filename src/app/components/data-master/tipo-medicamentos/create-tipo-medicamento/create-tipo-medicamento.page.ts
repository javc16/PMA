import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { DatosMaestrosDTO } from 'app/models/DatosMaestrosDTO';
import { TipoMedicamentoService } from 'app/services/tipoMedicamento/tipo-medicamento.service';
import { ToastService } from 'app/services/toast/toast.service';

@Component({
  selector: 'app-create-tipo-medicamento',
  templateUrl: './create-tipo-medicamento.page.html',
  styleUrls: ['./create-tipo-medicamento.page.scss'],
})
export class CreateTipoMedicamentoPage implements OnInit {
  tipoMedicamento: DatosMaestrosDTO = new DatosMaestrosDTO();

  constructor(
    private tipoDuracionService: TipoMedicamentoService,
    private router: Router,
    private toastService: ToastService
  ) {}

  ngOnInit() {
    this.resetForm();
  }

  onSubmit(form: NgForm) {
    if (this.tipoMedicamento !== null) {
      this.tipoDuracionService
        .createMedicamento(this.tipoMedicamento)
        .subscribe((data: any) => {
          if (data.status) {
            this.resetForm(form);
            this.toastService.presentToast(
              data.message,
              'success'
            );
            this.router.navigateByUrl('/tabs/data-master/tipo-medicamentos');
          } else {
            this.toastService.presentToast(data.message, 'danger');
          }
        });
    }
  }

  resetForm(form?: NgForm) {
    if (form != null) {
      form.reset();
      this.tipoMedicamento = {
        id:null,
        nombre: '',
        descripcion: '',
      };
    }
  }
}
