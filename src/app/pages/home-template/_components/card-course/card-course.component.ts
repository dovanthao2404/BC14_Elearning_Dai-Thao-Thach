import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '@services/data.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-card-course',
  templateUrl: './card-course.component.html',
  styleUrls: ['./card-course.component.scss']
})
export class CardCourseComponent implements OnInit {
  @Input() course: any;
  constructor(private router: Router, private dataService: DataService) { }

  ngOnInit(): void {
    if (Object.keys(this.course).length === 2) {
      console.log(this.course);
      this.dataService.get(`${environment.getInfoCourse}${this.course?.maKhoaHoc}`).subscribe((result) => {
        this.course = result;
      });
    }
  }

  onClickCourse() {
    this.router.navigate([`/detail/${this.course.maKhoaHoc}`],
      {
        queryParams: {
          maDanhMucKhoaHoc: this.course.danhMucKhoaHoc.maDanhMucKhoahoc,
          tenDanhMucKhoaHoc: this.course.danhMucKhoaHoc.tenDanhMucKhoaHoc
        }
      });
  }

}
