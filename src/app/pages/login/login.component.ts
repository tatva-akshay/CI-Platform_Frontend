import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
import { MatButtonModule } from '@angular/material/button';
import { Router, RouterLink, RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';
import { InputTextModule } from 'primeng/inputtext';
import { LoginForm } from '../../interface/login-form';
import { AuthService } from '../../services/auth.service';
import { ApiResponse } from '../../interface/api-response';
import { HttpClientModule } from '@angular/common/http';
import { PasswordValidator } from '../../validators/password.validator';
import { Carousel } from '../../interface/carousels';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CarouselModule, InputTextModule, FormsModule, ButtonModule, MatButtonModule, RouterOutlet, RouterModule, RouterLink, RouterLinkActive, ReactiveFormsModule, HttpClientModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  providers: [AuthService]
})

export class LoginComponent {
  constructor(
    private _authService: AuthService,
    private _router: Router,
    private messageService : MessageService
  ){}

  carousels :  any[] = [];
  products = [{'name': "Dhruvil"}, {'name': 'Shreyash'}]
  responsiveOptions: any[] | undefined;
  loginErrorMessage?: string;
  loginForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email, Validators.maxLength(128)]),
    password: new FormControl('', [Validators.required, PasswordValidator, Validators.minLength(8), Validators.maxLength(255)])
  });

  onSubmit(){  
    var login: LoginForm = {
      email : this.loginForm.value.email,
      password : this.loginForm.value.password
    }
    
    this._authService.login(login).subscribe((response: ApiResponse) => {
      if(response.isSuccess){
        var userId = response.result.split('#')[0];
        var userName = response.result.split('#')[1];
        window.sessionStorage.setItem("token", response.token);
        window.sessionStorage.setItem("userName", userName);
        window.sessionStorage.setItem("userId", userId);
        this.messageService.add({ severity: 'success', detail: 'User Logged in successfully', life: 3000 });
        this._router.navigate(['/dashboard']);        
      }
    }, 
    (error) => {
      if(error.error.statusCode == 404){
        this.messageService.add({ severity: 'error', summary: 'Error', detail: error.error.errorMessages[0], life: 3000 });
      }
    });
  }

  ngOnInit() { 
    this._authService.carousels().subscribe((response) => {
      if(response.isSuccess == true){
        this.carousels = response.result;
        console.log(this.carousels);
      }
    });
  }
}
