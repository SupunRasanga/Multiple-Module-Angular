import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigningComponent } from './signing/signing.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'signing',
    pathMatch: 'full'
  },
  {
    path: '',
    children: [
      {
        path: 'signing',
        component: SigningComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
