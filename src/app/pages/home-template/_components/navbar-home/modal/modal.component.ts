import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { DataService } from '@services/data.service';
import { ShareService } from '@services/share.service';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';

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

  constructor(private dataService: DataService, private shareService: ShareService) { }

  ngOnInit(): void {
  }

  onSubmit(value: any) {

    if (this.isLogin) {
      this.loginAct(value);
    } else {
      value.maNhom = "GP01";
      this.dataService.post(`${environment.register}`, value).subscribe({
        next: (data) => {

          this.loginAct(data);

          this.btnClose.nativeElement.click();
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Bạn đã đăng ký thành công',
            showConfirmButton: false,
            timer: 2000
          });
        },
        error: (error) => {
          this.errorRegister = error;
        }
      });
    }
  }

  loginAct(value: any) {
    this.dataService.post(`${environment.login}`, value).subscribe({
      next: (data) => {
        this.shareService.setUserLogin = data;
        this.btnClose.nativeElement.click();
      },
      error: (error) => {

        this.errorLogin = error;
      }
    });
  }
}
