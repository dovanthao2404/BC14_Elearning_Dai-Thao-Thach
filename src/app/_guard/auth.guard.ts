import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) { }
  canActivate() {
    const userLogin = JSON.parse(localStorage.getItem('USER_LOGIN') || "null");
    if (userLogin?.maLoaiNguoiDung === "GV") {
      return true;
    }
    this.router.navigate(['/auth']);
    return false;
  }
}
