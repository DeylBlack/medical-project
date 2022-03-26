import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LogInPageComponent} from "./log-in-page/log-in-page.component";
import {UserFormComponent} from "./user-form/user-form.component";

const routes: Routes = [
    {
        path: 'log-in',
        component: LogInPageComponent,
    },
    {
        path: 'user-form',
        component: UserFormComponent,
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
