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

  constructor(
    private dataService: DataService,
    private shareCourseServices: ShareCourseService
  ) { }

  ngOnInit(): void {
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

  onSubmit(value: any) {

    if (this.isLogin) {
      console.log(value);
      this.dataService.post("api/QuanLyNguoiDung/DangNhap", value).subscribe({
        next: (data) => {
          this.userLogin = this.userLogin;
          this.shareCourseServices.setUserLogin = data;
        },
        error: (error) => {
          console.log(error);
          this.error = error;
        }
      });
    }
  }
}
