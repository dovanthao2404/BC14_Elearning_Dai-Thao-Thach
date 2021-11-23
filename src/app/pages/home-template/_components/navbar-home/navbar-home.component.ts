import { Component, OnInit, ViewChild } from '@angular/core';
import { environment } from '@environments/*';
import { DataService } from '@services/data.service';
import { ShareCourseService } from '@services/share-course.service';

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
  // @ViewChild
  constructor(
    private dataService: DataService,
    private shareCourseServices: ShareCourseService
  ) { }

  ngOnInit(): void {
    this.shareCourseServices.getUserLogin.subscribe((result) => {
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
        // set dữ liêu vào shareCourseService
        this.shareCourseServices.setCourseCategory = data;
        // get dữ liệu từ shareCourseService
        this.shareCourseServices.getCourseCategory.subscribe((data) => {
          this.courseCategory = data;
        });
      },
    });
  }

  handleLogout() {
    this.shareCourseServices.setUserLogin = null;
  }

  onClickLogin() {
    this.isLogin = true;
  }
  onClickRegister() {
    this.isLogin = false;

  }
}
