import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from '@environments/*';
import { DataService } from '@services/data.service';
import { ShareService } from '@services/share.service';
import { OurNewsletters } from 'src/app/_core/modal/OurNewsletters';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  course: any;
  listCourse: any;
  notRegisterCourse: boolean = true;
  error = null;

  constructor(
    private activatedRoute: ActivatedRoute,
    private dataService: DataService,
    private shareService: ShareService,
  ) { }

  ngOnInit(): void {


    this.shareService.setIsLoading = true;
    window.scrollTo(0, 0);

    this.getCourse();

  }

  checkCourseRegister = (data: any) => {

    this.shareService.getInfoUser.subscribe((result: any) => {
      let flag = false;
      if (result) {
        for (let i = 0; i < result.length; i++) {
          if (result[i].maKhoaHoc == data.maKhoaHoc) {
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
  };


  getCourse() {
    this.activatedRoute.params.subscribe((params: any) => {

      this.dataService.get(`${environment.getInfoCourse}${params.id}`)
        .subscribe(
          {
            next: (data) => {
              this.course = data;
              this.checkCourseRegister(data);
              this.getListCourse();
            },
            error: (err) => {
              this.error = err;
              this.shareService.setIsLoading = false;

            }
          }
        );
    });
  }

  getListCourse() {
    this.activatedRoute.queryParams.subscribe((params: any) => {
      this.setOurNewsletters(params);
      this.dataService.get(`${environment.getCourseByCategory}maDanhMuc=${params.maDanhMucKhoaHoc}&MaNhom=${environment.GP_ID}`).subscribe((data) => {
        this.shareService.setIsLoading = false;
        this.listCourse = this.shuffle(data.filter((course: any) => course.maKhoaHoc !== this.course.maKhoaHoc)).slice(0, 4);
      });

    });
  }

  handleRegisterCourse() {

    if (this.shareService.getUserLogin.value) {
      const taiKhoan = this.shareService.getUserLogin.value.taiKhoan;
      const maKhoaHoc = this.course.maKhoaHoc;
      this.dataService.post(`${environment.registerCourseHome}`, { taiKhoan, maKhoaHoc }, {
        responseType: 'text',
      }).subscribe({
        next: (result) => {
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Bạn đã đăng ký thành công',
            showConfirmButton: false,
            timer: 2000
          }).then(() => {
            this.getInfoUser();

          });
        },
        error: () => {
          // this.redirectPage();
        }
      });


    } else {
      Swal.fire({
        title: 'Vui lòng đăng nhập',
        icon: 'info',
        confirmButtonText: 'OK'
      });
    }
  }

  setOurNewsletters(params: any) {
    this.shareService.setOurNewsletters = {
      title: params.tenDanhMucKhoaHoc,
      isSearch: false,
      breadcrumb: [
        {
          name: 'Trang chủ',
          link: '/',
          active: false
        },
        {
          name: params.tenDanhMucKhoaHoc,
          link: `/category/${params.maDanhMucKhoaHoc}`,
          queryParams: {
            tenDanhMuc: params.tenDanhMucKhoaHoc
          },
          active: false
        },
        {
          name: this.course?.tenKhoaHoc,
          link: '#',
          active: true
        }
      ]
    } as OurNewsletters;
  }

  shuffle(array: any) {
    let currentIndex = array.length, randomIndex;

    // While there remain elements to shuffle...
    while (currentIndex != 0) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }

    return array;
  }

  getInfoUser() {
    this.dataService
      .post(`${environment.infoUserHome}`, null).subscribe((result: any) => {
        const listCourse = [...result.chiTietKhoaHocGhiDanh];
        this.shareService.setInfoUser = listCourse;
      });
  }

}


