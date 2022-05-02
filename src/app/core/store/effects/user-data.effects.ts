import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";

import {AuthApiService} from "../../../shared/api/auth-api.service";
import * as userDataActions from '../actions/user-data.actions';
import {catchError, from, switchMap, tap, withLatestFrom} from "rxjs";
import {AuthService} from "../../../shared/services/auth.service";
import {Store} from "@ngrx/store";
import {IAppState} from "../state/app.state";
import {selectUserData} from "../selectors/user-data.selectors";

@Injectable()
export class UserDataEffects {
    auth$ = createEffect(() => this.actions.pipe(
        ofType(userDataActions.auth),
        switchMap(({ data }) => {
            return this.authApiService.login(data).pipe(
                switchMap((res) => from([
                    userDataActions.authSuccess({data: res})
                ])), catchError((e) => from([
                    userDataActions.authNotSuccess()
                ])),
            )
        })
    ));

    register$ = createEffect(() => this.actions.pipe(
        ofType(userDataActions.register),
        switchMap(({ data }) => {
            return this.authApiService.register(data).pipe(
                switchMap((res) => from([
                    userDataActions.registerSuccess()
                ])), catchError((e) => from([
                    userDataActions.registerNotSuccess()
                ])),
            )
        })
    ));

    setToken$ = createEffect(() => this.actions.pipe(
        ofType(userDataActions.authSuccess),
        withLatestFrom(this.store.select(selectUserData)),
        tap((data) => {
            this.authService.login(data[1].token, data[1].userId)
        }),
    ),
        {dispatch: false});

    constructor(
        private actions: Actions,
        private authApiService: AuthApiService,
        private authService: AuthService,
        private store: Store<IAppState>,
    ) {}
}
