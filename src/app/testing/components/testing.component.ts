import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

import {AuthApiService} from "../../shared/api/auth-api.service";

@Component({
  selector: 'app-testing',
  templateUrl: './testing.component.html',
  styleUrls: ['./testing.component.css']
})
export class TestingComponent implements OnInit {

  public authFormLogin: FormGroup = this.fb.group({
    email: [null, Validators.required],
    password: [null, Validators.required],
  });

  public authFormRegister: FormGroup = this.fb.group({
    email: [null, Validators.required],
    password: [null, Validators.required],
  });

  constructor(
      private authService: AuthApiService,
      private fb: FormBuilder,
  ) {}

  ngOnInit(): void {
  }

  public testRegister(): void {
    this.authService.register(this.authFormRegister.value).subscribe();
  }

  public testLogin(): void {
    this.authService.login(this.authFormLogin.value).subscribe((res) => {
      console.log(res)
    });
  }

}
