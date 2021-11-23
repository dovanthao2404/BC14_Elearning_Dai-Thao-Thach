import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { DataService } from '@services/data.service';
import { ShareCourseService } from '@services/share-course.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  @Input("isLogin") isLogin: any;
  @ViewChild("btnClose") btnClose: any;

  errorLogin: any;
  errorRegister: any;

  constructor(private dataService: DataService, private shareCourseServices: ShareCourseService) { }

  ngOnInit(): void {
  }
  onSubmit(value: any) {

    if (this.isLogin) {
      this.dataService.post("api/QuanLyNguoiDung/DangNhap", value).subscribe({
        next: (data) => {
          this.shareCourseServices.setUserLogin = data;
          this.btnClose.nativeElement.click();
        },
        error: (error) => {
          this.errorLogin = error;
        }
      });
    } else {
      value.maNhom = "GP01";
      this.dataService.post("api/QuanLyNguoiDung/DangKy", value).subscribe({
        next: (data) => {
          this.shareCourseServices.setUserLogin = data;
          this.btnClose.nativeElement.click();
        },
        error: (error) => {
          this.errorRegister = error;
        }
      });
    }
  }


}
