import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { ShareService } from '@services/share.service';

@Injectable({ providedIn: 'root' })
export class ProfileGuard implements CanActivate {
  constructor(private shareService: ShareService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const result = this.shareService.getUserLogin.value;
    if (result) {
      return true;
    }

    this.router.navigateByUrl("/");
    return false;
  }

}