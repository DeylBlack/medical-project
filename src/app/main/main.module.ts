import { NgModule } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { MenuComponent } from './menu/menu.component';
import { UserFormComponent } from './user-form/user-form.component';
import { ManagementPageComponent } from './management-page/management-page.component';
import { UserInformationComponent } from './user-information/user-information.component';
import { MainPageComponent } from './main-page/main-page.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { SharedModule } from '../shared/shared.module';
import { HistoryApiService } from '../shared/api/history-api.service';
import { ScheduleComponent } from "./schedule/schedule.components";

@NgModule({
  imports: [
    MainRoutingModule,
    MatSidenavModule,
    MatIconModule,
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
  ],
  declarations: [
    MainComponent,
    MenuComponent,
    UserFormComponent,
    ManagementPageComponent,
    UserInformationComponent,
    MainPageComponent,
    AccountSettingsComponent,
    ScheduleComponent,
  ],
  providers: [
    HistoryApiService,
  ],
})
export class MainModule {}
