import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { UserRegistrationComponent } from './components/user-registration/user-registration.component';
import { ForgotCredentialsComponent } from './components/forgot-credentials/forgot-credentials.component';

const routes: Routes = [
  {path:'',component:LoginPageComponent},
  {path:'login',component:LoginPageComponent},
  {path:'user-register',component:UserRegistrationComponent},
  {path:'forgot-credentials',component:ForgotCredentialsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
