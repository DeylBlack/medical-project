import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';

import { selectUserDataLoading } from '../core/store/selectors/user-data.selectors';
import { AuthApiService } from '../shared/api/auth-api.service';
import { AuthService } from '../shared/services/auth.service';
import { IAppState } from '../core/store/state/app.state';
import * as userDataAction from '../core/store/actions/user-data.actions';

@Component({
  selector: 'app-auth',
  templateUrl: 'auth.component.html',
  styleUrls: ['auth.component.css'],
})
export class AuthComponent implements OnInit {
  isLoading$ = this.store.select(selectUserDataLoading);

  public isLogin: boolean = true;

  public loginForm: FormGroup = this.fb.group({
    name: [null, Validators.required],
    password: [null, Validators.required],
  });

  public registrationForm: FormGroup = this.fb.group({
    email: [null, Validators.required],
    password: [null, Validators.required],
    phone: [null, Validators.required],
    name: [null, Validators.required],
    secondpass: [null, Validators.required],
  });

  constructor(
    private fb: FormBuilder,
    private authApiService: AuthApiService,
    private authService: AuthService,
    private store: Store<IAppState>,
    private router: Router,
  ) {}

  public ngOnInit(): void {
    if (this.authService.isLogin()) {
      this.router.navigate(['main']);
    }
  }

  public login():void {
    this.store.dispatch(userDataAction.auth({ data: this.loginForm.value }));
  }

  public reg(): void {
    this.store.dispatch(userDataAction.register({ data: this.registrationForm.value }));
  }
}
