import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss'],
})
export class TabsPage {
  constructor(private router: Router) {}

  removeLocalStorageValue(key) {
    this.router.navigate(['/sign-in']);
    localStorage.removeItem('userRoles');
    return localStorage.removeItem(key);
  }

  readLocalStorageValue(key) {
    return localStorage.getItem(key);
  }

  readAdminRole(key) {
    if(localStorage.getItem(key)==='Admin')
    {return true;}
    return false;
  }
}
