import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ForgetPasswordComponent } from './pages/forget-password/forget-password.component';
import { ResetPasswordComponent } from './pages/reset-password/reset-password.component';

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
        path: "dashboard",
        component: DashboardComponent,
        title: "Dashboard"
    }
];
