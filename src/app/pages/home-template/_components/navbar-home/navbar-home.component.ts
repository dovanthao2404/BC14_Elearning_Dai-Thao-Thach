import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router, RouterState } from '@angular/router';
import { environment } from '@environments/*';
import { DataService } from '@services/data.service';
import { ShareService } from '@services/share.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-navbar-home',
  templateUrl: './navbar-home.component.html',
  styleUrls: ['./navbar-home.component.scss'],
})
export class NavbarHomeComponent implements OnInit {
  courseCategory: any;
  isLogin: boolean = true;
  error: any;
  userLogin: any;

  constructor(
    private dataService: DataService,
    private shareService: ShareService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.shareService.getUserLogin.subscribe((result) => {
      this.userLogin = result;
      if (this.userLogin) {
        this.isLogin = true;
      }
    });
    this.getCourseCategory();
  }

  getCourseCategory() {
    this.dataService.get(environment.getCourseCategory).subscribe({
      next: (data) => {
        // set dữ liêu vào ShareService
        this.shareService.setCourseCategory = data;
        // get dữ liệu từ ShareService
        this.shareService.getCourseCategory.subscribe((data) => {
          this.courseCategory = data;
        });
      },
    });
  }

  handleLogout() {
    Swal.fire({
      title: 'Bạn có muốn đăng xuất không?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Có',
      cancelButtonText: "Không"
    }).then((result) => {
      if (result.isConfirmed) {
        this.shareService.setUserLogin = null;
        if (this.router.url === "/profile") {
          this.router.navigateByUrl("/");
        }
      }
    });

  }

  onClickLogin() {
    this.isLogin = true;
  }
  onClickRegister() {
    this.isLogin = false;

  }
}
