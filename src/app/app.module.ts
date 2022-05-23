import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CdkAccordionModule } from '@angular/cdk/accordion';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatSidenavModule } from '@angular/material/sidenav';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ToastrModule } from 'ngx-toastr';
import { MatIconModule } from '@angular/material/icon';
import { AppComponent } from './app.component';
import { LogInPageComponent } from './log-in-page/log-in-page.component';
import { MenuComponent } from './menu/menu.component';
import { UserFormComponent } from './user-form/user-form.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthApiService } from './shared/api/auth-api.service';
import { AuthService } from './shared/services/auth.service';
import { AuthGuardService } from './shared/services/auth-guard.service';
import { SessionInfoService } from './shared/services/session-info.service';
import { environment } from '../environments/environment';
import { appReducer } from './core/store/reducers/app.reducer';
import { UserDataEffects } from './core/store/effects/user-data.effects';
import { LoadingSpinnerComponent } from './shared/components/loading-spinner/loading-spinner.component';
import { ManagementPageComponent } from './management-page/management-page.component';
import { UserInformationComponent } from './user-information/user-information.component';
import { HistoryEffects } from './core/store/effects/history.effects';
import { HistoryApiService } from './shared/api/history-api.service';
import { MainPageComponent } from './main-page/main-page.component';
import {AccountSettingsComponent} from "./account-settings/account-settings.component";

@NgModule({
  declarations: [
    AppComponent,
    LogInPageComponent,
    MenuComponent,
    UserFormComponent,
    LoadingSpinnerComponent,
    ManagementPageComponent,
    UserInformationComponent,
    MainPageComponent,
    AccountSettingsComponent,
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
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    EffectsModule.forRoot([UserDataEffects, HistoryEffects]),
    StoreRouterConnectingModule.forRoot(),
    MatProgressSpinnerModule,
    ToastrModule.forRoot(),
    MatIconModule,
  ],
  providers: [
    AuthApiService,
    AuthService,
    AuthGuardService,
    SessionInfoService,
    HistoryApiService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
