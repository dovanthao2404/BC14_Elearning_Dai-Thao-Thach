import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ShareService } from '@services/share.service';
import { OurNewsletters } from 'src/app/_core/modal/OurNewsletters';
@Component({
  selector: 'app-our-newsletters',
  templateUrl: './our-newsletters.component.html',
  styleUrls: ['./our-newsletters.component.scss']
})
export class OurNewslettersComponent implements OnInit {
  ourNewsletters = {} as OurNewsletters;
  searchValue: string = '';
  @ViewChild('formSearch') formSearch: any;

  constructor(private shareService: ShareService, private router: Router) {
  }

  ngOnInit(): void {
    this.shareService.getOurNewsletters.subscribe(res => {
      this.ourNewsletters = res;
    });

  }

  handleSubmit(value: any) {
    if (value.search) {
      this.searchValue = '';
      this.router.navigate([`/search`], {
        queryParams: { value: value.search }
      });
    } else {
      this.router.navigate([`/`]);
    }

  }

}
