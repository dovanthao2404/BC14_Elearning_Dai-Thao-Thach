import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-course',
  templateUrl: './card-course.component.html',
  styleUrls: ['./card-course.component.scss']
})
export class CardCourseComponent implements OnInit {
  @Input() course: any;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onClickCourse() {
    this.router.navigate([`/detail/${this.course.maKhoaHoc}`], { queryParams: { maDanhMucKhoaHoc: this.course.danhMucKhoaHoc.maDanhMucKhoahoc, tenDanhMucKhoaHoc: this.course.danhMucKhoaHoc.tenDanhMucKhoaHoc } });
  }

}
