import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthApiService} from "../shared/api/auth-api.service";
import {AuthService} from "../shared/services/auth.service";

@Component({
  selector: 'app-log-in-page',
  templateUrl: './log-in-page.component.html',
  styleUrls: ['./log-in-page.component.css']
})
export class LogInPageComponent implements OnInit {

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
  ) {}

  ngOnInit(): void {
  }

  public login():void{
    this.authApiService.login(this.loginForm.value).subscribe((response: any) => {
      this.authService.login(response.token, response.userId);
    });
  }

  public registration(): void {
    this.authApiService.register(this.registrationForm.value).subscribe();
  }
}
