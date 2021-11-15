import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShareCourseService {

  private courseCategory = new BehaviorSubject([]);
  private listCourse = new BehaviorSubject([]);

  // get set method
  get getCourseCategory() {
    return this.courseCategory;
  }
  set setCourseCategory(value: any) {
    // Lấy lần duy nhất tại navbar-home
    this.courseCategory.next(value);
  }

  get getListCourse() {
    return this.courseCategory.value;
  }
  set setListCourse(data: any) {
    this.listCourse.next(data);
  }



  constructor() { }

}
