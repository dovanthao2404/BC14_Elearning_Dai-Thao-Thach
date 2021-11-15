import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-our-newsletters',
  templateUrl: './our-newsletters.component.html',
  styleUrls: ['./our-newsletters.component.scss']
})
export class OurNewslettersComponent implements OnInit {
  isSearch: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

}
