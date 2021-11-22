import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { OurNewsletters } from '../modal/OurNewsletters';

@Injectable({
  providedIn: 'root'
})
export class ShareCourseService {

  private courseCategory = new BehaviorSubject([]);
  private listCourse = new BehaviorSubject([]);

  private ourNewsletters = new BehaviorSubject({
    title: 'TÌM KHÓA HỌC CỦA BẠN',
    isSearch: true,
    breadcrumb: []
  } as OurNewsletters);

  private userLogin = new BehaviorSubject(null);

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

  get getOurNewsletters() {
    return this.ourNewsletters;
  }
  set setOurNewsletters(data: OurNewsletters) {

    this.ourNewsletters.next(data);
  }

  get getUserLogin() {
    return this.userLogin;
  }

  set setUserLogin(value: any) {
    this.userLogin.next(value);
  }



  constructor() { }

}
