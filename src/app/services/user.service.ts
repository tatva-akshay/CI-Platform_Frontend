import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiResponse } from '../interface/api-response';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private _httpClient: HttpClient) { }

  profileImage() : Observable<ApiResponse>{
    var id = window.sessionStorage.getItem("userId");
    return this._httpClient.get<ApiResponse>('https://localhost:7017/users/profile-image?id=' + id);
  }
}
