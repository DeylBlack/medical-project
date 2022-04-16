import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LogInPageComponent} from "./log-in-page/log-in-page.component";
import {UserFormComponent} from "./user-form/user-form.component";
import {TestingComponent} from "./testing/components/testing.component";
import {AuthGuardService} from "./shared/services/auth-guard.service";

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'login'
    },
    {
        path: 'login',
        component: LogInPageComponent,
    },
    {
        path: 'user-form',
        component: UserFormComponent,
        canActivate: [AuthGuardService]
    },
    {
        path: 'testing',
        component: TestingComponent,
        canActivate: [AuthGuardService]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
