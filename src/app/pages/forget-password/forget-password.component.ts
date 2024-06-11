import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Carousel } from '../../interface/carousels';
import { AuthService } from '../../services/auth.service';
import { CarouselModule } from 'primeng/carousel';
import { InputTextModule } from 'primeng/inputtext';
import { HttpClientModule } from '@angular/common/http';
import { RouterLink, RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';
import { ForgetPassword } from '../../interface/forget-password';

@Component({
  selector: 'app-forget-password',
  standalone: true,
  imports: [FormsModule, InputTextModule, ReactiveFormsModule, CarouselModule, HttpClientModule, RouterLink, RouterLinkActive, RouterModule, RouterOutlet],
  templateUrl: './forget-password.component.html',
  styleUrl: './forget-password.component.css',
  providers: [AuthService]
})
export class ForgetPasswordComponent {
  constructor(private _authService: AuthService) {}
  forgetPasswordForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email, Validators.maxLength(128)]),
  });
  carousels: Carousel[] = [];
  responsiveOptions: any[] | undefined;

  onSubmit(){
    var forgetPassword: ForgetPassword = {
      email : this.forgetPasswordForm.value.email
    }
    console.log(forgetPassword)
    this._authService.forgetPassword(forgetPassword).subscribe((response) => {
      if(response.isSuccess == true){
        console.log(response);
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
}
