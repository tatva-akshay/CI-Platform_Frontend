import { Injectable } from '@angular/core';
import { ApiResponse } from '../../interface/api-response';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  constructor(private _httpClient: HttpClient) { }

  get(): Observable<ApiResponse>{
    return this._httpClient.get<ApiResponse>('https://localhost:7017/auth/countries');
  }
}
