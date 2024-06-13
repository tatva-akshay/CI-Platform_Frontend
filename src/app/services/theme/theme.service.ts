import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiResponse } from '../../interface/api-response';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  constructor(private _httpClient: HttpClient) { }

  get(): Observable<ApiResponse>{
    return this._httpClient.get<ApiResponse>('https://localhost:7017/themes');
  }

}
