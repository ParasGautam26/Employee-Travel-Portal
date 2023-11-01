import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { UserRegistrationComponent } from './components/user-registration/user-registration.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ForgotCredentialsComponent } from './components/forgot-credentials/forgot-credentials.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    UserRegistrationComponent,
    ForgotCredentialsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
