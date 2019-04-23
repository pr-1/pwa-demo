import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { AuthRoutingModule } from './auth-routing.module';
import {SharedModule} from '../shared.module';
import { SignupComponent } from './signup/signup.component';
import {AuthService} from '../services/auth.service';

@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent
  ],
  imports: [
    AuthRoutingModule,
    SharedModule
  ],
  providers: [AuthService]
})
export class AuthModule { }
