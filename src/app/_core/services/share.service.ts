import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { OurNewsletters } from '../modal/OurNewsletters';

@Injectable({
  providedIn: 'root'
})
export class ShareService {

  private courseCategory = new BehaviorSubject([]);
  private listCourse = new BehaviorSubject([]);

  private ourNewsletters = new BehaviorSubject({
    title: 'TÌM KHÓA HỌC CỦA BẠN',
    isSearch: true,
    breadcrumb: []
  } as OurNewsletters);

  private isLoading = new BehaviorSubject(false);

  private userLogin = new BehaviorSubject(JSON.parse(localStorage.getItem(environment.userLogin) || "null"));

  private inFoUser = new BehaviorSubject(JSON.parse(localStorage.getItem(environment.listCourseRegister) || "null"));

  // get set method

  get getInfoUser() {
    return this.inFoUser;
  }

  set setInfoUser(info: any) {
    if (info) {
      localStorage.setItem(environment.listCourseRegister, JSON.stringify(info));
    } else {
      localStorage.removeItem(environment.listCourseRegister);
    }
    this.inFoUser.next(info);
  }

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
    if (value) {
      localStorage.setItem(environment.userLogin, JSON.stringify(value));
    } else {
      localStorage.removeItem(environment.userLogin);
    }
    this.userLogin.next(value);
  }

  get getIsLoading() {
    return this.isLoading;
  }

  set setIsLoading(value: boolean) {
    this.isLoading.next(value);
  }

  constructor() { }

}
