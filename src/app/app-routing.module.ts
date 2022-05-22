import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogInPageComponent } from './log-in-page/log-in-page.component';
import { UserFormComponent } from './user-form/user-form.component';
import { AuthGuardService } from './shared/services/auth-guard.service';
import { ManagementPageComponent } from './management-page/management-page.component';
import { UserInformationComponent } from './user-information/user-information.component';
import { MainPageComponent } from './main-page/main-page.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'login',
  },
  {
    path: 'login',
    component: LogInPageComponent,
  },
  {
    path: 'user-form',
    component: UserFormComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'management',
    component: ManagementPageComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'user-information',
    component: UserInformationComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'main',
    component: MainPageComponent,
    canActivate: [AuthGuardService],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
