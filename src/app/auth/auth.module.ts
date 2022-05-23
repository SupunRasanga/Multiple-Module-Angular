import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { SigningComponent } from './signing/signing.component';
import { AuthBaseComponent } from './auth-base/auth-base.component';
import { SignupComponent } from './signup/signup.component';



@NgModule({
  declarations: [
    SigningComponent,
    AuthBaseComponent,
    SignupComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
