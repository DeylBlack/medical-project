import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AuthComponent } from './auth.component';
import { AuthRoutingModule } from './auth-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    AuthRoutingModule,
    ReactiveFormsModule,
    SharedModule,
    CommonModule,
  ],
  declarations: [
    AuthComponent,
  ],
})
export class AuthModule { }
