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
    console.log(this.category);
    this.getListCourse();
  }


  getListCourse() {
    this.dataService.get(`${`${environment.getCourseByCategory}?MaNhom=${environment.GP_ID}`}maDanhMuc=${this.category.maDanhMuc}&MaNhom=${environment.GP_ID}`).subscribe((data) => {
      this.listCourse = data;
    });

  }

}
