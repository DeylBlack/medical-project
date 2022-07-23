import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { ToastrModule } from 'ngx-toastr';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthApiService } from './shared/api/auth-api.service';
import { AuthService } from './shared/services/auth.service';
import { AuthGuardService } from './shared/services/auth-guard.service';
import { SessionInfoService } from './shared/services/session-info.service';
import { environment } from '../environments/environment';
import { appReducer } from './core/store/reducers/app.reducer';
import { UserDataEffects } from './core/store/effects/user-data.effects';
import { HistoryEffects } from './core/store/effects/history.effects';
import { HistoryApiService } from './shared/api/history-api.service';
import { AuthModule } from './auth/auth.module';
import { MainModule } from './main/main.module';
import { SharedModule } from './shared/shared.module';
import { InputComponent } from './shared/ui-components/input/input.component';
import { NotFoundComponent } from './not-found/not-found.component';

const MedicalImports = [
  SharedModule,
  MainModule,
  AuthModule,
];

@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    NotFoundComponent,
  ],
  imports: [
    MedicalImports,
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    StoreModule.forRoot(appReducer),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    EffectsModule.forRoot([UserDataEffects, HistoryEffects]),
    StoreRouterConnectingModule.forRoot(),
    ToastrModule.forRoot(),
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
