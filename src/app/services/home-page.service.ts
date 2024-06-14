import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiResponse } from '../interface/api-response';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomePageService {

  constructor(private _httpClient: HttpClient) { }

  missions(themes: string[], countries: string[], cities: string[], skills: string[], page: number, pageSize: number, search: string, sort: string): Observable<ApiResponse>{
    var userId = window.sessionStorage.getItem("userId") ?? 0;
    var url : string = 'https://localhost:7017/missions?userId='+userId;
    if(themes != null && themes.length > 0){

      themes.forEach(theme => {
        if(theme != null || theme != ""){
          url += "&themes="+theme;
        }
      });
    }
    if(countries != null && countries.length > 0){

      countries.forEach(country => {
        if(country != null || country != ""){
          url += "&countries=" + country;
        }
      });
    }
    if(cities != null && cities.length > 0){

      cities.forEach(city => {
        if(city != null || city != ""){
          url += "&cities=" + city;
        }
      });
    }
    if(skills != null && skills.length > 0){

      skills.forEach(skill => {
        if(skill != null || skill != ""){
          url += "&skills=" + skill;
        }
      });
    }
    if(page != null && page > 0){
      url += "&page=" + page;
    }
    if(pageSize != null && pageSize > 0){
      url += "&pageSize=" + pageSize;
    }
    if(search != null && search != ""){
      url += "&search=" + search;
    }
    if(sort != null && sort != ""){
      url += "&orderBy=" + sort;
    }
    return this._httpClient.get<ApiResponse>(url);
  }

}
