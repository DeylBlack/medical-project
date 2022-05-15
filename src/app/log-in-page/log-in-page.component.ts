import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthApiService} from "../shared/api/auth-api.service";
import {AuthService} from "../shared/services/auth.service";
import {Store} from "@ngrx/store";
import {IAppState} from "../core/store/state/app.state";
import * as userDataAction from '../core/store/actions/user-data.actions';
import {selectUserDataLoading} from "../core/store/selectors/user-data.selectors";

@Component({
  selector: 'app-log-in-page',
  templateUrl: './log-in-page.component.html',
  styleUrls: ['./log-in-page.component.css']
})
export class LogInPageComponent implements OnInit {
  isLoading$ = this.store.select(selectUserDataLoading);

  public isLogin: boolean = true;
  public loginForm: FormGroup = this.fb.group({
    email: [null, Validators.required],
    password: [null, Validators.required],
  });

  public registrationForm: FormGroup = this.fb.group({
    email: [null, Validators.required],
    password: [null, Validators.required],
  });

  constructor(
    private fb: FormBuilder,
    private authApiService: AuthApiService,
    private authService: AuthService,
    private store: Store<IAppState>,
  ) {}

  ngOnInit(): void {
  }

  public login():void{
    this.store.dispatch(userDataAction.auth({data: this.loginForm.value}));
  }

  public reg(): void {
    this.store.dispatch(userDataAction.register({data: this.registrationForm.value}));
  }
}
