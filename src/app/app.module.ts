import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CdkAccordionModule } from "@angular/cdk/accordion";
import { RouterModule } from "@angular/router";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { LogInPageComponent } from './log-in-page/log-in-page.component';
import { MenuComponent } from './menu/menu.component';
import { UserFormComponent } from './user-form/user-form.component';
import { AppRoutingModule } from "./app-routing.module";
import { TestingComponent } from './testing/components/testing.component';
import {MatSidenavModule} from "@angular/material/sidenav";
import {AuthApiService} from "./shared/api/auth-api.service";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {ReactiveFormsModule} from "@angular/forms";
import {AuthService} from "./shared/services/auth.service";
import {AuthGuardService} from "./shared/services/auth-guard.service";
import {SessionInfoService} from "./shared/services/session-info.service";
import { ManagementPageComponent } from './management-page/management-page.component';
import { UserInformationComponent } from './user-information/user-information.component';

@NgModule({
  declarations: [
    AppComponent,
    LogInPageComponent,
    MenuComponent,
    UserFormComponent,
    TestingComponent,
    ManagementPageComponent,
    UserInformationComponent,
  ],
    imports: [
        BrowserModule,
        RouterModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        CdkAccordionModule,
        MatSidenavModule,
        HttpClientModule,
        ReactiveFormsModule
    ],
  providers: [
      AuthApiService,
      AuthService,
      AuthGuardService,
      SessionInfoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
