import { Injectable } from '@angular/core';

import {HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { tap } from 'rxjs/operators';
import { map } from 'rxjs/operators';
import { catchError } from 'rxjs/operators';

import { CommonService} from '../services/common.service';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  
  constructor(private http:HttpClient, public common: CommonService) { }

  private catchError(error: Response | any) {
      //console.error(error);
      return throwError("Server error.");
  }

  private logResponse(res: Response) {
      console.log(res);
  }

  send(params) {
      console.log(this.common.api_url);
      return this.http.get(this.common.api_url + 'user/login' , { params: params}).pipe(
          tap(this.logResponse),
          map(res => res),
          catchError(this.catchError)
      );
  }
}
