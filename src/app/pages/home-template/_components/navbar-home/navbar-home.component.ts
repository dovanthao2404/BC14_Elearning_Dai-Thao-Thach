import { Component, OnInit } from '@angular/core';
import { environment } from '@environments/*';
import { DataService } from '@services/data.service';
import { ShareCourseService } from '@services/share-course.service';

@Component({
  selector: 'app-navbar-home',
  templateUrl: './navbar-home.component.html',
  styleUrls: ['./navbar-home.component.scss']
})
export class NavbarHomeComponent implements OnInit {

  courseCategory: any;

  constructor(private dataService: DataService, private shareCourseServices: ShareCourseService) { }

  ngOnInit(): void {
    this.getCourseCategory();
  }

  getCourseCategory() {
    this.dataService.get(environment.getCourseCategory).subscribe({
      next: (data) => {
        // set dữ liêu vào shareCourseService
        this.shareCourseServices.setCourseCategory = data;
        // get dữ liệu từ shareCourseService
        this.shareCourseServices.getCourseCategory.subscribe((data) => { this.courseCategory = data; });
      },
    });
  }



}
