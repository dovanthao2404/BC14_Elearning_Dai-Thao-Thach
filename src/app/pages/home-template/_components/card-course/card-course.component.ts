import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '@services/data.service';
import { ShareService } from '@services/share.service';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-card-course',
  templateUrl: './card-course.component.html',
  styleUrls: ['./card-course.component.scss']
})
export class CardCourseComponent implements OnInit {
  @Input() course: any;
  notRegisterCourse: boolean = false;
  register: boolean = true;
  isProfile: boolean = false;


  constructor(private router: Router, private dataService: DataService, private shareService: ShareService,
  ) { }

  ngOnInit(): void {
    this.shareService.getInfoUser.subscribe((result: any) => {
      let flag = false;
      if (result) {
        for (let i = 0; i < result.length; i++) {
          if (result[i].maKhoaHoc == this.course.maKhoaHoc) {
            flag = true;
            break;
          }
        }
      }
      if (flag) {
        this.notRegisterCourse = true;
      } else {
        this.notRegisterCourse = false;
      }
    });
    if (Object.keys(this.course).length === 2) {
      this.register = false;
      this.dataService.get(`${environment.getInfoCourse}${this.course?.maKhoaHoc}`).subscribe((result) => {
        this.course = result;
      });
    }

    this.getPath();

  }

  getPath() {
    const url = this.router.url;
    if (url === "/profile") {
      this.isProfile = true;
    }
  }



  redirectPage() {
    this.router.navigate([`/detail/${this.course.maKhoaHoc}`],
      {
        queryParams: {
          maDanhMucKhoaHoc: this.course.danhMucKhoaHoc.maDanhMucKhoahoc,
          tenDanhMucKhoaHoc: this.course.danhMucKhoaHoc.tenDanhMucKhoaHoc
        }
      });
  }

  onClickCancel() {
    Swal.fire({
      title: 'Bạn có muốn hủy đăng ký khóa học không',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Có',
      cancelButtonText: "Không"
    }).then((result) => {
      if (result.isConfirmed) {
        const taiKhoan = this.shareService.getUserLogin.value.taiKhoan;
        const maKhoaHoc = this.course.maKhoaHoc;
        this.dataService.post("api/QuanLyKhoaHoc/HuyGhiDanh", { taiKhoan, maKhoaHoc }, {
          responseType: 'text',
        }).subscribe((result) => {
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Bạn đã hủy đăng ký thành công',
            showConfirmButton: false,
            timer: 1000
          }).then(() => {
            this.getInfoUser();
            this.router.navigateByUrl("/");
          });

        });
      }
    });
  }

  goDetail() {
    this.redirectPage();
  }

  getInfoUser() {
    this.dataService
      .post(`${environment.infoUserHome}`, null).subscribe((result: any) => {
        const listCourse = [...result.chiTietKhoaHocGhiDanh];
        this.shareService.setInfoUser = listCourse;
      });
  }
}
