import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from '@environments/*';
import { DataService } from '@services/data.service';
import { ShareService } from '@services/share.service';
import { OurNewsletters } from 'src/app/_core/modal/OurNewsletters';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  course: any;
  listCourse: any;

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


  getCourse() {
    this.activatedRoute.params.subscribe((params: any) => {
      this.dataService.get(`${environment.getInfoCourse}${params.id}`)
        .subscribe(
          {
            next: (data) => {
              this.course = data;
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


}


