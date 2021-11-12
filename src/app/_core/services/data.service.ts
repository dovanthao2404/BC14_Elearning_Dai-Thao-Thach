import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from "rxjs/operators";
import { environment } from 'src/environments/environment';

let urlApi = '';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) {
    urlApi = environment.urlApi;
  }

  get(url: string): Observable<any> {
    return this.http.get(`${urlApi}/${url}`).pipe(catchError(this.handleError));
  }

  handleError(error: any) {
    return throwError(() => error);
  }

}
