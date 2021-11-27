import { Component, OnInit, } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from '@environments/*';
import { DataService } from '@services/data.service';
import { ShareService } from '@services/share.service';
import { OurNewsletters } from 'src/app/_core/modal/OurNewsletters';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss']
})

export class SearchPageComponent implements OnInit {

  listCourse: any;
  infoPagination: any;

  error: any;

  constructor(
    private shareService: ShareService,
    private dataService: DataService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {


    window.scrollTo(0, 0);
    this.shareService.setIsLoading = true;

    this.handleGetListCourse();
  };


  handleGetListCourse() {

    // Reset our newsletters
    this.setOurNewsletters("TÌM KHÓA HỌC CỦA BẠN", true, []);

    // Lay du lieu tu URL
    this.activatedRoute.queryParams.subscribe((result: any) => {

      const searchKey = result.value;

      // call api lấy danh sách khóa học theo từ khóa tìm kiếm
      this.getListCourseBySearchKey(searchKey);
    });


  }

  getListCourseBySearchKey(searchKey: string) {
    this.dataService.get(`${environment.getListCourseSearch}tenKhoaHoc=${searchKey}&MaNhom=${environment.GP_ID}`)
      .subscribe({
        next: (data) => {
          this.shareService.setIsLoading = false;

          this.error = null;

          const title = `Đã tìm thấy ${data.length} khóa học với từ khóa ${searchKey}`;

          this.setOurNewsletters(title, true, []);

          this.listCourse = data;
          const tempPagination = {
            currentPage: 1,
            item: 8,
            totalPages: this.numberToArray(Math.ceil(data.length / 8)),
            totalItems: data.length,
            itemStart: 0,
            itemEnd: 8,
          };
          this.infoPagination = { ...tempPagination };

        },
        error: () => {
          const title = "TÌM KHÓA HỌC CỦA BẠN";
          this.setOurNewsletters(title, true, []);
          this.error = {
            error: `${searchKey}`
          };
          this.shareService.setIsLoading = false;
        }
      });
  }


  setOurNewsletters(title: string, isSearch: boolean, breadcrumb: Array<any>) {
    this.shareService.setOurNewsletters =
      {
        title,
        isSearch,
        breadcrumb
      } as OurNewsletters;
  }

  // number to array
  numberToArray(number: number) {
    return Array.from(Array(number).keys());
  }

  // next page
  nextPage(page: any) {

    if (page < this.infoPagination.totalPages.length) {

      const infoTemp = { ...this.infoPagination };
      infoTemp.currentPage = page + 1;
      infoTemp.itemStart = (page) * infoTemp.item;
      infoTemp.itemEnd = (page + 1) * infoTemp.item;
      this.infoPagination = { ...infoTemp };
    }
  }

  // prev page
  prevPage(page: any) {
    if (page > 1) {
      this.infoPagination.currentPage = page - 1;
      this.infoPagination.itemStart = (page - 2) * this.infoPagination.item;
      this.infoPagination.itemEnd = (page - 1) * this.infoPagination.item;
    }
  }

  // go to page
  goToPage(page: any) {
    if (page + 1 === this.infoPagination.currentPage) {
      return;
    }

    if (page + 1 > this.infoPagination.currentPage && page + 1 <= this.infoPagination.totalPages.length) {
      this.nextPage(page);

    } else {
      this.prevPage(page + 2);
    }
  }

}
