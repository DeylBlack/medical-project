import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { UserFormComponent } from './user-form/user-form.component';
import { AuthGuardService } from '../shared/services/auth-guard.service';
import { ManagementPageComponent } from './management-page/management-page.component';
import { UserInformationComponent } from './user-information/user-information.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { MainComponent } from './main.component';
import { MainPageComponent } from './main-page/main-page.component';
import {ScheduleComponent} from "./schedule/schedule.components";
import {HelpAssistanceComponent} from "./help-assistance/help-assistance.component";

export const mainRoutes: Routes = [
  {
    path: 'main',
    component: MainComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'main-page',
      },
      {
        path: 'main-page',
        component: MainPageComponent,
      },
      {
        path: 'management',
        component: ManagementPageComponent,
        canActivate: [AuthGuardService],
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
        path: 'account-settings',
        component: AccountSettingsComponent,
        canActivate: [AuthGuardService],
      },
      {
        path: 'schedule',
        component: ScheduleComponent,
        canActivate: [AuthGuardService],
      },
      {
        path: 'help-assistance',
        component: HelpAssistanceComponent,
        canActivate: [AuthGuardService],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(mainRoutes)],
  exports: [RouterModule],
})
export class MainRoutingModule {}
