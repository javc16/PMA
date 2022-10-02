import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { DatosMaestrosDTO } from 'app/models/DatosMaestrosDTO';
import { MedicamentoService } from 'app/services/medicamento/medicamento.service';
import { ToastService } from 'app/services/toast/toast.service';

@Component({
  selector: 'app-create-medicamento',
  templateUrl: './create-medicamento.page.html',
  styleUrls: ['./create-medicamento.page.scss'],
})
export class CreateMedicamentoPage implements OnInit {
  medicamento: DatosMaestrosDTO = new DatosMaestrosDTO();

  constructor(
    private medicamentoService: MedicamentoService,
    private router: Router,
    private toastService: ToastService
  ) {}

  ngOnInit() {
    this.resetForm();
  }

  onSubmit(form: NgForm) {
    if (this.medicamento !== null) {
      this.medicamentoService
        .createMedicamento(this.medicamento)
        .subscribe((data: any) => {
          if (data.status) {
            this.resetForm(form);
            this.toastService.presentToast(
              'Nuevo Medicamento Creado Correctamente',
              'success'
            );
            this.router.navigateByUrl('/tabs/data-master/medicamentos');
          } else {
            this.toastService.presentToast('Ese medicamento ya existe', 'danger');
          }
        });
    }
  }

  resetForm(form?: NgForm) {
    if (form != null) {
      form.reset();
      this.medicamento = {
        id:null,
        nombre: '',
        descripcion: '',
      };
    }
  }
}
