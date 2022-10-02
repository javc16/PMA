import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from 'app/models/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private url: string;
  constructor(private http: HttpClient) {
    this.url = 'https://localhost:54474/api/Authentication';
  }

  create(user: User) {
    return this.http.post(this.url + '/register', user);
  }

  userAuthentication(user: string, password: string) {
    const body = {
      userName: user,
      password,
    };
    return this.http.post(this.url + '/login', body);
  }

  roleMatch(allowedRoles): boolean {
    let isMatch = false;
    const payLoad = JSON.parse(
      window.atob(localStorage.getItem('token').split('.')[1])
    );
    const userRole = payLoad.role;
    allowedRoles.forEach((element) => {
      if (userRole === element) {
        isMatch = true;
        return false;
      }
    });
    return isMatch;
  }
}
