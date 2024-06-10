import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginForm } from '../interface/login-form';
import { Observable } from 'rxjs';
import { ApiResponse } from '../interface/api-response';
import { RegisterForm } from '../interface/register-form';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _httpClient: HttpClient) { }

  login(login: LoginForm): Observable<ApiResponse>{
    return this._httpClient.post<ApiResponse>('https://localhost:7017/auth/login', login);
  }

  register(register: RegisterForm): Observable<ApiResponse>{
    return this._httpClient.post<ApiResponse>('https://localhost:7017/auth/register', register);
  }
}
