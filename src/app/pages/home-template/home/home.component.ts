import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/_core/services/data.service';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private dataServices: DataService) { }

  ngOnInit(): void {
    this.dataServices.get(environment.getListCourse).subscribe({
      next: (data) => console.log(data),
      error: (error) => console.log(error)
    });
  }

}
