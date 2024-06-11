import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { CarouselModule } from 'primeng/carousel';
import { InputTextModule } from 'primeng/inputtext';
import { RegisterForm } from '../../interface/register-form';
import { AbstractControl, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { ApiResponse } from '../../interface/api-response';
import { HttpClientModule } from '@angular/common/http';
import { PasswordValidator } from '../../validators/password.validator';
import { PhoneNumberValidator } from '../../validators/phone-number.validator';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CarouselModule, InputTextModule, RouterLink, RouterOutlet, HttpClientModule, FormsModule, ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
  providers: [AuthService]
})
export class RegisterComponent {
  constructor(
    private _authService: AuthService,
    private _router: Router,
  ){}

  responsiveOptions: any[] | undefined;
  carousels : any[] = [];
  ConfirmPasswordValidator(control: AbstractControl){
    let a = control.get('password')
    return control.get('password')?.value === control.get('confirmPassword')?.value ? null : {PasswordMismatch: true}
  }

  registerForm: FormGroup = new FormGroup({    
    firstName: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(16)]),
    lastName: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(16)]),
    phoneNumber: new FormControl('', [Validators.required, PhoneNumberValidator]),
    email: new FormControl('', [Validators.required, Validators.email, Validators.maxLength(128)]),
    password: new FormControl('', [Validators.required, PasswordValidator, Validators.minLength(8), Validators.maxLength(255)]),
    confirmPassword: new FormControl('', [Validators.required, PasswordValidator, Validators.minLength(8), Validators.maxLength(255)])
  },
  {
    validators: this.ConfirmPasswordValidator
  }
);

  onSubmit(){
  
    var register: RegisterForm = {
      firstName : this.registerForm.value.firstName,
      lastName : this.registerForm.value.lastName,
      phoneNumber : this.registerForm.value.phoneNumber,
      email : this.registerForm.value.email,
      password : this.registerForm.value.password,
      confirmPassword : this.registerForm.value.confirmPassword
    }

    this._authService.register(register).subscribe((response: ApiResponse) => {
      if(response.isSuccess){
        this._router.navigate(['/login']);        
      }
      console.log(response);
    });
  }

  ngOnInit() {

    this._authService.carousels().subscribe((response) => {
      if(response.isSuccess == true){
        this.carousels = response.result;
        console.log(this.carousels);
      }
    });
    
    this.responsiveOptions = [
        // {
        //     breakpoint: '1199px',
        //     numVisible: 1,
        //     numScroll: 0
        // },
        // {
        //     breakpoint: '991px',
        //     numVisible: 1,
        //     numScroll: 0
        // },
        // {
        //     breakpoint: '767px',
        //     numVisible: 1,
        //     numScroll: 0
        // }
    ];
  }
}
