import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, RouterModule, RouterOutlet } from '@angular/router';
import { PasswordValidator } from '../../validators/password.validator';
import { AuthService } from '../../services/auth.service';
import { CarouselModule } from 'primeng/carousel'
import { InputTextModule } from 'primeng/inputtext'
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ResetPassword } from '../../interface/reset-password';
import { ConfirmDialogModule } from 'primeng/confirmdialog'
import { ConfirmationService, MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button'
@Component({
  selector: 'app-reset-password',
  standalone: true,
  imports: [ButtonModule, ConfirmDialogModule, FormsModule, ReactiveFormsModule, RouterModule, RouterOutlet, CarouselModule, InputTextModule, HttpClientModule],
  templateUrl: './reset-password.component.html',
  styleUrl: './reset-password.component.css',
  providers: [AuthService, ConfirmationService]
})
export class ResetPasswordComponent {
  constructor(
    private _route: ActivatedRoute,
    private _authService: AuthService,
   private confirmationService : ConfirmationService,
   private messageService:MessageService
  
  ) {}

  responsiveOptions: any[] | undefined;
  carousels : any[] = [];
  ConfirmPasswordValidator(control: AbstractControl){
    let a = control.get('password')
    return control.get('password')?.value === control.get('confirmPassword')?.value ? null : {PasswordMismatch: true}
  }
  resetPasswordForm : FormGroup = new FormGroup({
    password: new FormControl('', [Validators.required, PasswordValidator, Validators.minLength(8), Validators.maxLength(255)]),
    confirmPassword: new FormControl('', [Validators.required, PasswordValidator, Validators.minLength(8), Validators.maxLength(255)])
  },
  {
    validators: this.ConfirmPasswordValidator
  });


  onSubmit(){
    var resetPassword : ResetPassword = {
      token : '',
      password : this.resetPasswordForm.value.password,
      confirmPassword : this.resetPasswordForm.value.confirmPassword
    }
    this._authService.resetPassword(resetPassword).subscribe((response) => {
      console.log(response)
      if(response.isSuccess){
        this.messageService.add({ severity: 'success', summary: 'Password Changed Successfully', life: 3000 })
      }
    },
  (error) => {
    if(error.error.statusCode == 401){
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Token expired, click on Forget password to get new token', life: 3000 });
    }
  });
  }

  ngOnInit(){

    this._authService.carousels().subscribe((response) => {
      if(response.isSuccess == true){
        this.carousels = response.result;
        console.log(this.carousels);
      }
    });

    window.sessionStorage.setItem('resetPasswordToken', this._route.snapshot.queryParams['token']);
  }
  confirm() {
    this.confirmationService.confirm({
        header: 'Are you sure to change the password?',
        accept: () => {
            this.onSubmit();
        }
    });
}
}
