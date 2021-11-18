import { Component, OnInit, } from '@angular/core';
import { environment } from '@environments/*';
import { DataService } from '@services/data.service';
import { ShareCourseService } from '@services/share-course.service';
import { OurNewsletters } from 'src/app/_core/modal/OurNewsletters';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss']
})

export class SearchPageComponent implements OnInit {

  ourNewsletters = {} as OurNewsletters;
  listCourse: any;

  error: any;

  constructor(private shareCourse: ShareCourseService, private dataService: DataService) { }

  ngOnInit(): void {
    this.shareCourse.getOurNewsletters.subscribe((result: OurNewsletters) => {
      this.ourNewsletters = result;
      this.getCourseBySearchKey();
    }
    );
  };


  getCourseBySearchKey() {
    if (this.ourNewsletters.searchKey) {

      this.dataService.get(`${environment.getListCourse}tenKhoaHoc=${this.ourNewsletters.searchKey}&MaNhom=${environment.GP_ID}`)
        .subscribe({
          next: (data) => {
            this.error = null;
            this.ourNewsletters.title = `Đã tìm thấy ${data.length} khóa học với từ khóa ${this.ourNewsletters.searchKey}`;
            this.listCourse = data;
          },
          error: (err) => {
            this.ourNewsletters.title = "TÌM KHÓA HỌC CỦA BẠN";
            this.error = {
              error: `${this.ourNewsletters.searchKey}`
            };
          }
        });
    }
  }


}
