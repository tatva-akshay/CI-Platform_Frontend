import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginForm } from '../interface/login-form';
import { Observable, catchError, of, throwError } from 'rxjs';
import { ApiResponse } from '../interface/api-response';
import { RegisterForm } from '../interface/register-form';
import { ForgetPassword } from '../interface/forget-password';
import { ResetPassword } from '../interface/reset-password';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _httpClient: HttpClient) { }

  login(login: LoginForm): Observable<ApiResponse>{
    return this._httpClient.post<ApiResponse>('https://localhost:7017/auth/login', login)
      .pipe(catchError((error: any) => {
        return throwError(error);
      }));
  }

  register(register: RegisterForm): Observable<ApiResponse>{
    return this._httpClient.post<ApiResponse>('https://localhost:7017/auth/register', register)
      .pipe(catchError((error: any) => {
        return throwError(error);
      }));
  }

  forgetPassword(forgetPassword: ForgetPassword): Observable<ApiResponse>{
    return this._httpClient.post<ApiResponse>('https://localhost:7017/auth/forget-password', forgetPassword)
      .pipe(catchError((error: any) => {
        return throwError(error);
      }));
  }

  resetPassword(resetPassword: ResetPassword): Observable<ApiResponse>{
    resetPassword.token = window.sessionStorage.getItem('resetPasswordToken')!;
    return this._httpClient.post<ApiResponse>('https://localhost:7017/auth/reset-password', resetPassword)
      .pipe(catchError((error: any) => {
        return throwError(error);
      }));
  }

  carousels(): Observable<ApiResponse>{
    return this._httpClient.get<ApiResponse>('https://localhost:7017/auth/carousels')
      .pipe(catchError((error: any) => {
        return throwError(error);
      }));
  }
}
