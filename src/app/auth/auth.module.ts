import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { SigningComponent } from './signing/signing.component';
import { AuthBaseComponent } from './auth-base/auth-base.component';
import { SignupComponent } from './signup/signup.component';
import { PageNotFoundComponent } from './errors/page-not-found/page-not-found.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { AlertComponent } from '../shared/components/alert/alert.component';



@NgModule({
  declarations: [
    SigningComponent,
    AuthBaseComponent,
    SignupComponent,
    PageNotFoundComponent,

  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule
  ],
  // entryComponents: [
  //   AlertComponent
  // ]
})
export class AuthModule { }
