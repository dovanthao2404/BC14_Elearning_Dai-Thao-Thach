import { Component, OnInit } from '@angular/core';
import { DataService } from '@services/data.service';
import { ShareCourseService } from '@services/share-course.service';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  courseCategory: any;


  constructor(private dataService: DataService, private shareCourse: ShareCourseService) { }

  ngOnInit(): void {
    this.shareCourse.getCourseCategory.subscribe((data) => {
      this.courseCategory = data;
    });
  }

  ngAfterViewCheck() {
    console.log("done");
  }



}
