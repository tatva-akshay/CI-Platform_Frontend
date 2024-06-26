import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiResponse } from '../../interface/api-response';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private _httpClient: HttpClient) { }

  get(missionId: number): Observable<ApiResponse>{
    return this._httpClient.get<ApiResponse>('https://localhost:7017/mission-comments/'+missionId);
  }
}
