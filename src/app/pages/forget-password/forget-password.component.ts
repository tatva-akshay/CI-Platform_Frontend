import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Carousel } from '../../interface/carousels';
import { AuthService } from '../../services/auth.service';
import { CarouselModule } from 'primeng/carousel';
import { InputTextModule } from 'primeng/inputtext';
import { HttpClientModule } from '@angular/common/http';
import { Router, RouterLink, RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';
import { ForgetPassword } from '../../interface/forget-password';
import { ToastModule } from 'primeng/toast'
import { ConfirmDialogModule } from 'primeng/confirmdialog'
import { ConfirmationService, MessageService } from 'primeng/api';
import { catchError } from 'rxjs';
import { ApiResponse } from '../../interface/api-response';
@Component({
  selector: 'app-forget-password',
  standalone: true,
  imports: [ToastModule, ConfirmDialogModule, FormsModule, InputTextModule, ReactiveFormsModule, CarouselModule, HttpClientModule, RouterLink, RouterLinkActive, RouterModule, RouterOutlet],
  templateUrl: './forget-password.component.html',
  styleUrl: './forget-password.component.css',
  providers: [AuthService, ConfirmationService]
})
export class ForgetPasswordComponent {
  constructor(
    private _authService: AuthService, 
    private confirmationService : ConfirmationService, 
    private messageService : MessageService,
    private _router : Router  ) {}
  forgetPasswordForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email, Validators.maxLength(128)]),
  });
  carousels: Carousel[] = [];
  responsiveOptions: any[] | undefined;

  onSubmit(){
    var forgetPassword: ForgetPassword = {
      email : this.forgetPasswordForm.value.email
    }
    this._authService.forgetPassword(forgetPassword)
    .subscribe((response) => {
      if(response.isSuccess == true){
        this.messageService.add({ severity: 'success', summary: 'Sent', detail: 'Password reset link sent successfully', life: 3000 });
        this._router.navigate(['/login']);
      }
    }, (error) => {
      if(error.error.statusCode == 404){
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Email ID not found', life: 3000 });
      }
      else{
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Something went wrong', life: 3000 });
      }
    });
    // .pipe( res => 
    //   catchError(this._authService.handleError<ApiResponse>('countries')));      
  }
  ngOnInit() { 

    this._authService.carousels().subscribe((response) => {
      if(response.isSuccess == true){
        this.carousels = response.result;
        console.log(this.carousels);
      }
    });
    this.responsiveOptions = [
      {
          breakpoint: '1199px',
          numVisible: 1,
          numScroll: 1
      },
      {
          breakpoint: '991px',
          numVisible: 1,
          numScroll: 1
      },
      {
          breakpoint: '767px',
          numVisible: 1,
          numScroll: 1
      }
  ];
  }

  confirm() {
    this.confirmationService.confirm({
        header: 'Please confirm to reset the Password.',
        accept: () => {
            this.onSubmit();
        }
    });
}
}
