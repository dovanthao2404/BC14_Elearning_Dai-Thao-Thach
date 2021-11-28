import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ShareService } from '@services/share.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-navbar-admin',
  templateUrl: './navbar-admin.component.html',
  styleUrls: ['./navbar-admin.component.scss'],
})
export class NavbarAdminComponent implements OnInit {
  constructor(private router: Router, private shareService: ShareService) { }

  ngOnInit(): void { }

  logOut() {
    Swal.fire({
      title: 'Bạn có muốn đăng xuất không?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Có',
      cancelButtonText: 'Không',
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.removeItem('USER_LOGIN');
        this.router.navigate(['/auth']);
        this.shareService.setUserLogin = null;
        this.shareService.setInfoUser = null;
      }
    });
  }
}
