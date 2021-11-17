import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '@services/data.service';

@Component({
  selector: 'app-category-course',
  templateUrl: './category-course.component.html',
  styleUrls: ['./category-course.component.scss'],
})
export class CategoryCourseComponent implements OnInit {
  constructor(
    // Lay param
    private activatedRoute: ActivatedRoute,

    // Call api
    private dataService: DataService
  ) {}

  ngOnInit(): void {
    // this.activatedRoute.params.subscribe((result: any) => {
    //   console.log(result.maDanhMuc);
    //   this.dataService
    //     .get(
    //       `api/QuanLyKhoaHoc/LayKhoaHocTheoDanhMuc?maDanhMuc=${result.maDanhMuc}&MaNhom=GP01`
    //     )
    //     .subscribe({
    //       next: (data) => {
    //         console.log(data);
    //       },
    //       error: (err) => {
    //         console.log(err);
    //       },
    //     });
    // });
    // const id = this.activatedRoute.snapshot.paramMap.get('id');
    // console.log({ id });
  }
}
