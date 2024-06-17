import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiResponse } from '../../interface/api-response';
import { MissionForm } from '../../interface/mission-form';

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

  apply(id:number) : Observable<ApiResponse>{
    var userId = window.sessionStorage.getItem("userId") ?? 0;
    return this._httpClient.post<ApiResponse>('https://localhost:7017/missions/apply?missionId='+id + '&userId='+userId, {});
  }
  
  createMission(mission : MissionForm) : Observable<ApiResponse>{
    var userId = window.sessionStorage.getItem("userId") ?? 0;
    // const headers = new HttpHeaders().set('Content-Type', 'multipart/form-data');
    return this._httpClient.post<ApiResponse>('https://localhost:7017/missions?userId='+userId, mission);
  }
}
