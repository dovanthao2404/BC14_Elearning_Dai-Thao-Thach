import { Component, OnInit } from '@angular/core';
import { ShareService } from '@services/share.service';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent implements OnInit {
  isLoading = false;

  constructor(private shareService: ShareService) { }

  ngOnInit(): void {

    this.shareService.getIsLoading.subscribe((result) => {
      this.isLoading = result;
    });
  }

}
