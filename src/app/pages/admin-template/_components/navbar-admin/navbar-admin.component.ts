import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar-admin',
  templateUrl: './navbar-admin.component.html',
  styleUrls: ['./navbar-admin.component.scss'],
})
export class NavbarAdminComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  logOut() {
    let confirm: boolean = window.confirm('Bạn có thực sự muốn đăng xuất');
    if (confirm) {
      localStorage.removeItem('USER_LOGIN');
      this.router.navigate(['/auth']);
    }
  }
}
