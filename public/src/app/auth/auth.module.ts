import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegComponent } from './components/reg/reg.component';
import { LoginComponent } from './components/login/login.component';
import { AuthShellComponent } from './containers/auth-shell/auth-shell.component';
import { RouterModule, Routes } from '@angular/router';

const ROUTES: Routes = [
  {
    path: '',
    children: [
      { path: 'reg', component: RegComponent },
      { path: 'login', component: LoginComponent }
    ]
  }
];

@NgModule({
  declarations: [LoginComponent, RegComponent, AuthShellComponent],
  imports: [CommonModule, RouterModule.forChild(ROUTES)]
})
export class AuthModule {}
