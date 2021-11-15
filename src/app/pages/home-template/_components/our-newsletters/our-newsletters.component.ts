import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ShareCourseService } from '@services/share-course.service';
import { OurNewsletters } from 'src/app/_core/modal/OurNewsletters';
@Component({
  selector: 'app-our-newsletters',
  templateUrl: './our-newsletters.component.html',
  styleUrls: ['./our-newsletters.component.scss']
})
export class OurNewslettersComponent implements OnInit {
  ourNewsletters = {} as OurNewsletters;

  @ViewChild('formSearch') formSearch: any;

  constructor(private shareCourseService: ShareCourseService, private router: Router) { }

  ngOnInit(): void {
    this.shareCourseService.getOurNewsletters.subscribe(res => {
      this.ourNewsletters = res;
    });

  }

  handleSubmit(value: any) {
    if (value.search) {
      const tempObj = { ...this.ourNewsletters };
      tempObj.searchKey = value.search;
      this.shareCourseService.setOurNewsletters = tempObj;
      this.router.navigate([`/search`]);
    }
  }



}
