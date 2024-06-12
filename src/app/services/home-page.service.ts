import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiResponse } from '../interface/api-response';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomePageService {

  constructor(private _httpClient: HttpClient) { }

  missions(): Observable<ApiResponse>{
    var userId = window.sessionStorage.getItem("userId") ?? 0;
    return this._httpClient.get<ApiResponse>('https://localhost:7017/missions?userId='+userId);
  }

}
