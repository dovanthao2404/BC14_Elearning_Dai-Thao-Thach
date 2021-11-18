import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '@services/data.service';
import { ShareCourseService } from '@services/share-course.service';
import { OurNewsletters } from 'src/app/_core/modal/OurNewsletters';

@Component({
  selector: 'app-category-course',
  templateUrl: './category-course.component.html',
  styleUrls: ['./category-course.component.scss'],
})
export class CategoryCourseComponent implements OnInit {
  listCourse: any;
  ourNewsletters: any;

  constructor(
    // Lay param
    private activatedRoute: ActivatedRoute,

    // Call api
    private dataService: DataService,
    private shareCourseService: ShareCourseService
  ) { }

  ngOnInit(): void {
    // this.shareCourseService.getOurNewsletters.subscribe({
    //   next: (data: any) => {
    // this.ourNewsletters =

    //   }
    // });

    this.getCourseCategory();
    this.changeOurNewsletters();
  }

  changeOurNewsletters() {
    this.activatedRoute.queryParamMap.subscribe((result: any) => {

      const categoryName = result.params.tenDanhMuc;

      const breadcrumb = [
        {
          name: 'Trang chủ',
          link: '/',
          active: false,
        },
        {
          name: categoryName,
          link: '#',
          active: true,
        },
      ];
      const title = categoryName;

      this.setOurNewsletters(title, false, breadcrumb);

    });
  }

  setOurNewsletters(title: string, isSearch: boolean, breadcrumb: Array<any>) {
    this.shareCourseService.setOurNewsletters =
      {
        title,
        isSearch,
        breadcrumb
      } as OurNewsletters;
  }

  getCourseCategory() {
    this.activatedRoute.params.subscribe((result: any) => {
      this.dataService
        .get(
          `api/QuanLyKhoaHoc/LayKhoaHocTheoDanhMuc?maDanhMuc=${result.maDanhMuc}&MaNhom=GP01`
        )
        .subscribe({
          next: (data) => {
            this.listCourse = data;
          },
          error: (err) => {
            console.log(err);
          },
        });
    });
  }
}
