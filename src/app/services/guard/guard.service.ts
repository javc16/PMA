import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { ToastService } from '../toast/toast.service';
import { UserService } from '../user/user.service';

@Injectable({
  providedIn: 'root',
})
export class GuardService implements CanActivate {
  /**
   *
   */
  constructor(private router: Router, private userService: UserService, private toastService: ToastService) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    if (localStorage.getItem('token') != null) {
      const roles = next.data.permittedRoles as Array<string>;
      if (roles) {
        if (this.userService.roleMatch(roles)) {
          return true;
        } else {
          this.toastService.presentToast(
            'Inicie sesion para acceder',
            'danger'
          );
          this.router.navigate(['/sign-in']);
        }
      }
      return true;
    } else
    {
      this.toastService.presentToast(
        'Inicie sesion para acceder',
        'danger'
      );
      this.router.navigate(['/sign-in']);
    }
    //{this.router.navigate(['/forbidden']);}
    return false;
  }
}
