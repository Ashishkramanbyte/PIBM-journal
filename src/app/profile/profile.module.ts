import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile.component';
import { LoginComponent } from './login/login.component';
import { Routing } from '../pages/routing';
import { RouterModule, Routes } from '@angular/router';
import { CreateAccountComponent } from './create-account/create-account.component';


const routes: Routes = [
  {
    path: '',
    component: ProfileComponent,
    children:Routing
  },
];

@NgModule({
  declarations: [
    ProfileComponent,
    LoginComponent,
    CreateAccountComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})
export class ProfileModule { }
