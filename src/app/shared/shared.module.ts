import { NgModule } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner.component';
import { AuthApiService } from './api/auth-api.service';
import { AuthService } from './services/auth.service';
import { AuthGuardService } from './services/auth-guard.service';
import { SessionInfoService } from './services/session-info.service';

@NgModule({
  imports: [
    MatProgressSpinnerModule,
  ],
  declarations: [
    LoadingSpinnerComponent,
  ],
  exports: [
    LoadingSpinnerComponent,
  ],
  providers: [
    AuthApiService,
    AuthService,
    AuthGuardService,
    SessionInfoService,
  ],
})
export class SharedModule {}
