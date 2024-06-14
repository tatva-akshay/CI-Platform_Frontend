import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { HomeComponent } from './pages/home/home.component';
import { ForgetPasswordComponent } from './pages/forget-password/forget-password.component';
import { ResetPasswordComponent } from './pages/reset-password/reset-password.component';
import { MissionDetailsComponent } from './pages/mission-details/mission-details.component';

export const routes: Routes = [
    {
        path: "",
        component: LoginComponent,
        title: "Login"
    },
    {
        path: "login",
        component: LoginComponent,
        title: "Login"
    },
    {
        path: "register",
        component: RegisterComponent,
        title: "Register"
    },
    {
        path: "forget-password",
        component: ForgetPasswordComponent,
        title: "Forget Password"
    },
    {
        path: "reset-password",
        component: ResetPasswordComponent,
        title: "Reset Password"
    },
    {
        path: "home",
        component: HomeComponent,
        title: "home"
    },
    {
        path: "mission/:id",
        component: MissionDetailsComponent,
        title: "Mission"
    }
];
