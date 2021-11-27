import { Component, OnInit } from '@angular/core';
import { ShareService } from '@services/share.service';
import { OurNewsletters } from 'src/app/_core/modal/OurNewsletters';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  courseCategory: any;

  constructor(
    private shareService: ShareService
  ) { }

  ngOnInit(): void {
    this.shareService.setIsLoading = true;
    this.shareService.setOurNewsletters = {
      title: "TÌM KHÓA HỌC CỦA BẠN",
      isSearch: true,
      breadcrumb: []
    } as OurNewsletters;

    this.shareService.getCourseCategory.subscribe((data) => {
      this.courseCategory = data;
    });
  }



}
