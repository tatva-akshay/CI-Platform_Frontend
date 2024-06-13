import { Injectable } from '@angular/core';
import { ApiResponse } from '../../interface/api-response';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {

  constructor(private _httpClient: HttpClient) { }

  get(): Observable<ApiResponse>{
    return this._httpClient.get<ApiResponse>('https://localhost:7017/skills');
  }
}
