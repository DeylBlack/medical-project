import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ToastrService } from 'ngx-toastr';
import {
  catchError, from, of, switchMap, tap, withLatestFrom,
} from 'rxjs';
import { Store } from '@ngrx/store';

import { AuthApiService } from '../../../shared/api/auth-api.service';
import * as userDataActions from '../actions/user-data.actions';
import { AuthService } from '../../../shared/services/auth.service';
import { IAppState } from '../state/app.state';
import { selectError, selectUserData } from '../selectors/user-data.selectors';

@Injectable()
export class UserDataEffects {
  auth$ = createEffect(() => this.actions.pipe(
    ofType(userDataActions.auth),
    switchMap(({ data }) => this.authApiService.login(data).pipe(switchMap((res) => from([
      userDataActions.authSuccess({ data: res }),
    ])), catchError((e) => of(userDataActions.authNotSuccess({ error: e }))))),
  ));

  authError$ = createEffect(
    () => this.actions.pipe(
      ofType(userDataActions.authNotSuccess),
      withLatestFrom(this.store.select(selectError)),
      tap((error:any) => {
        this.toast.error(error.message, 'Login Error', {
          timeOut: 5000,
          closeButton: true,
        });
      }),
    ),
    { dispatch: false },
  );

  register$ = createEffect(() => this.actions.pipe(
    ofType(userDataActions.register),
    switchMap(({ data }) => this.authApiService.register(data).pipe(switchMap(() => from([
      userDataActions.registerSuccess({ data }),
    ])), catchError((e) => of(userDataActions.registerNotSuccess({ error: e }))))),
  ));

  registerSuccess$ = createEffect(() => this.actions.pipe(
    ofType(userDataActions.registerSuccess),
    switchMap(({ data }) => this.authApiService.login(data).pipe(switchMap((res) => from([
      userDataActions.authSuccess({ data: res }),
    ])), catchError((e) => of(userDataActions.authNotSuccess({ error: e }))))),
  ));

  registerError$ = createEffect(
    () => this.actions.pipe(
      ofType(userDataActions.registerNotSuccess),
      withLatestFrom(this.store.select(selectError)),
      tap((error:any) => {
        this.toast.error(error.message, 'Registration Error', {
          timeOut: 5000,
          closeButton: true,
        });
      }),
    ),
    { dispatch: false },
  );

  setToken$ = createEffect(
    () => this.actions.pipe(
      ofType(userDataActions.authSuccess),
      withLatestFrom(this.store.select(selectUserData)),
      tap((data) => {
        this.authService.login(data[1].token, data[1].user);
      }),
    ),
    { dispatch: false },
  );

  constructor(
    private actions: Actions,
    private authApiService: AuthApiService,
    private authService: AuthService,
    private store: Store<IAppState>,
    private toast: ToastrService,
  ) {}
}
