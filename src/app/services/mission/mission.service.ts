import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiResponse } from '../../interface/api-response';

@Injectable({
  providedIn: 'root'
})
export class MissionService {

  constructor(private _httpClient: HttpClient) { }

  get(id: number): Observable<ApiResponse>{
    var userId = window.sessionStorage.getItem("userId") ?? 0;
    return this._httpClient.get<ApiResponse>('https://localhost:7017/missions/'+id + '?userId='+userId);
  }

  getRelatedMissions(id: number): Observable<ApiResponse>{
    var userId = window.sessionStorage.getItem("userId") ?? 0;
    return this._httpClient.get<ApiResponse>('https://localhost:7017/missions/related-missions?missionId='+id + '&userId='+userId);
  }
}
