import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'app/models/user';
import { ToastService } from 'app/services/toast/toast.service';
import { UserService } from 'app/services/user/user.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage implements OnInit {
  user: User = new User();
  emailPattern = '^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$';
  roles: any[];
  constructor(
    private userService: UserService,
    private router: Router,
    private toastService: ToastService
  ) {}

  ngOnInit() {
    this.resetForm();
  }

  onSubmit(form: NgForm) {
    if (this.user !== null) {
      this.user.role = 'Normal';
      this.userService.create(this.user).subscribe((data: any) => {
        if (data.data.succeeded) {
          this.resetForm(form);
          this.toastService.presentToast(
            'Nuevo Usuario Creado Correctamente',
            'success'
          );
          this.router.navigateByUrl('/sign-in');
        } else {
          data.data.errors.forEach(async (element) => {
            switch (element.code) {
              case 'DuplicateUserName':
                this.toastService.presentToast(
                  'Ese usuario ya existe',
                  'danger'
                );
                break;

              default:
                this.toastService.presentToast(
                  `No se pudo crear el usuario ${element.description}`,
                  'danger'
                );
                break;
            }
          });
        }
      });
    }
  }

  resetForm(form?: NgForm) {
    if (form != null) {
      form.reset();
      this.user = {
        userName: '',
        password: '',
        email: '',
        firstName: '',
        lastName: '',
        name: '',
        role: '',
      };
    }
  }
}
