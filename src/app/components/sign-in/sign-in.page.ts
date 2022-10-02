import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'app/services/user/user.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.page.html',
  styleUrls: ['./sign-in.page.scss'],
})
export class SignInPage implements OnInit {
  isLoginError = false;
  constructor(private userService: UserService, private router: Router) {}

  ngOnInit() {
    if (localStorage.getItem('token') != null) {
      this.router.navigateByUrl('/tabs');
    }
  }

  navigateToSignUp() {
    this.router.navigate(['/sign-up']);
  }

  onSubmit(userName, password) {
    this.userService
      .userAuthentication(userName, password)
      .subscribe((data: any) => {
        if (!data.status) {
          //this._notifications.error(data.message,'Registration failed.');
        } else {
          localStorage.setItem('token', data.data.token);
          localStorage.setItem('userRoles', data.data.role);
          localStorage.setItem('userId', data.data.userId);

          this.router.navigate(['/tabs']);
        }
      });
  }
}
