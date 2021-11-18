import { Component, OnInit, Input } from '@angular/core';
import { environment } from '@environments/*';
import { DataService } from '@services/data.service';

@Component({
  selector: 'app-list-course',
  templateUrl: './list-course.component.html',
  styleUrls: ['./list-course.component.scss']
})
export class ListCourseComponent implements OnInit {

  @Input() category: any;

  listCourse: any;

  constructor(private dataService: DataService) { }


  ngOnInit(): void {
    this.getListCourse(this.category.maDanhMuc);
  }


  getListCourse(maDanhMuc: any) {
    this.dataService.get(`${environment.getCourseByCategory}maDanhMuc=${maDanhMuc}&MaNhom=${environment.GP_ID}`).subscribe((data) => {
      console.log(data);
      this.listCourse = data;
    });

  }

}
