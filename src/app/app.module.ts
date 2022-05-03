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
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import {appReducer} from "./core/store/reducers/app.reducer";
import {UserDataEffects} from "./core/store/effects/user-data.effects";
import { LoadingSpinnerComponent } from './shared/components/loading-spinner/loading-spinner.component';
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import { ManagementPageComponent } from './management-page/management-page.component';
import { UserInformationComponent } from './user-information/user-information.component';
import { ToastrModule } from 'ngx-toastr';


@NgModule({
  declarations: [
    AppComponent,
    LogInPageComponent,
    MenuComponent,
    UserFormComponent,
    TestingComponent,
    LoadingSpinnerComponent,
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
        ReactiveFormsModule,
        StoreModule.forRoot(appReducer),
        StoreDevtoolsModule.instrument({maxAge: 25, logOnly: environment.production}),
        EffectsModule.forRoot([UserDataEffects]),
        StoreRouterConnectingModule.forRoot(),
        MatProgressSpinnerModule,
        ToastrModule.forRoot(),
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
