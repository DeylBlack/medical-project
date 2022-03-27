import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LogInPageComponent } from './log-in-page/log-in-page.component';
import { MenuComponent } from './menu/menu.component';
import { UserFormComponent } from './user-form/user-form.component';
import {RouterModule} from "@angular/router";
import {AppRoutingModule} from "./app-routing.module";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ApiComponent } from './api/components/api.component';

@NgModule({
  declarations: [
    AppComponent,
    LogInPageComponent,
    MenuComponent,
    UserFormComponent,
    ApiComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
